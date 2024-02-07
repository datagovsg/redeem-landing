/**
 * An extensible data table adapted from Care360
 */
import {
  Box,
  Flex,
  Icon,
  Spinner,
  Table,
  TableCellProps,
  TableColumnHeaderProps,
  TableProps,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import { flexRender, Table as ReactTable } from '@tanstack/react-table'
import { BiDownArrowAlt, BiUpArrowAlt } from 'react-icons/bi'

export interface DataTableProps<D> extends TableProps {
  instance: ReactTable<D>
  isFetching?: boolean
  tablePropOverrides?: {
    [key: string]: {
      td: TableCellProps
    }
  }
  onClickRow?: (data: D) => void
  emptyPlaceholder?: React.ReactElement
  tableHeaderProps?: TableColumnHeaderProps
  tableCellProps?: TableCellProps
  dividerColor?: string
}

export const DataTable = <T extends object>({
  instance,
  isFetching,
  tablePropOverrides,
  emptyPlaceholder,
  onClickRow,
  tableHeaderProps,
  tableCellProps,
  // Note we dont have such colors, but will just put as default
  dividerColor = 'brand.secondary.100',
  ...tableProps
}: DataTableProps<T>): JSX.Element => {
  const { rows } = instance.getRowModel()

  if (rows.length === 0) {
    return <>{emptyPlaceholder}</>
  }

  return (
    <Flex
      position="relative"
      flexDirection="column"
      flex={1}
      overflowX="auto"
      width="100%"
      height="100%"
      maxHeight="100%"
      borderRadius="0.25rem"
    >
      {isFetching && (
        <>
          <Flex
            position="absolute"
            zIndex="1"
            top={0}
            right={0}
            bottom={0}
            left={0}
            // white alpha to denote loading
            padding="1rem"
            background="whiteAlpha.800"
          />
          <Flex
            position="fixed"
            top={0}
            right={0}
            bottom={0}
            left={0}
            width="100vw"
            height="$100vh"
          >
            <Box margin="auto">
              <Spinner />
            </Box>
          </Flex>
        </>
      )}
      <Table sx={{ tableLayout: 'fixed' }} {...tableProps} position="relative">
        {rows.length > 0 && (
          <Thead>
            {instance.getHeaderGroups().map((headerGroup) => (
              <Tr
                key={headerGroup.id}
                color="interaction.sub.default"
                borderColor={dividerColor}
                borderBottomWidth="1px"
                // To toggle _groupHover styles to show divider when header is hovered.
                data-group
              >
                {headerGroup.headers.map((header) => (
                  <Th
                    key={header.id}
                    textTransform="none"
                    background="base.canvas.alt"
                    _first={{
                      paddingInlineStart: '16px',
                    }}
                    _last={{
                      paddingInlineEnd: '16px',
                    }}
                    onClick={
                      header.column.getCanSort()
                        ? header.column.getToggleSortingHandler()
                        : undefined
                    }
                    paddingInline="8px"
                    style={{
                      width:
                        header.getSize() === Number.MAX_SAFE_INTEGER
                          ? 'auto'
                          : `${header.getSize()}px`,
                    }}
                    {...tableHeaderProps}
                  >
                    <Flex alignItems="center">
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                      {{
                        asc: (
                          <Icon
                            as={BiUpArrowAlt}
                            marginLeft="-0.5rem"
                            fontSize="1rem"
                          />
                        ),
                        desc: (
                          <Icon
                            as={BiDownArrowAlt}
                            marginLeft="-0.5rem"
                            fontSize="1rem"
                          />
                        ),
                      }[header.column.getIsSorted() as string] ?? null}
                    </Flex>
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
        )}
        <Tbody>
          {rows.map((row) => {
            return (
              <Tr
                key={row.id}
                borderBottomWidth="1px"
                cursor={onClickRow ? 'pointer' : 'auto'}
                onClick={() => onClickRow?.(row.original)}
                role="group"
              >
                {row.getVisibleCells().map((cell) => {
                  return (
                    <Td
                      key={cell.id}
                      verticalAlign="center"
                      background="white"
                      _first={{
                        paddingInlineStart: '16px',
                      }}
                      _last={{
                        paddingInlineEnd: '16px',
                      }}
                      _groupHover={
                        onClickRow
                          ? { backgroundColor: 'interaction.muted.main.hover' }
                          : {}
                      }
                      paddingInline="8px"
                      paddingY="12px"
                      {...tableCellProps}
                      {...tablePropOverrides?.[cell.column.id]?.td}
                      {...tablePropOverrides?.[cell.id]?.td}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </Td>
                  )
                })}
              </Tr>
            )
          })}
        </Tbody>
      </Table>
    </Flex>
  )
}
