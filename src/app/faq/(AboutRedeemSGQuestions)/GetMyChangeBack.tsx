import { Text, VStack } from '@chakra-ui/react'
import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

import AnswerContainer from '../(components)/AnswerContainer'

import { DataTable } from '~components/DataTable'

type GetChangeExampleDto = {
  // Hardcoding it as 2dp and with the $ sign
  valueOfVouchersUsed: string
  result: string
}

const columnHelper = createColumnHelper<GetChangeExampleDto>()
// Somehow, i cannot pass the textStyle to header props (will not spent time to investigate it for now)
const changeExampleColumn = [
  columnHelper.accessor('valueOfVouchersUsed', {
    header: () => <Text textStyle="subhead-2">Value of Vouchers Used</Text>,
    cell: (info) => <Text textStyle="body-2">{info.getValue()}</Text>,
  }),
  columnHelper.accessor('result', {
    header: () => <Text textStyle="subhead-2">Unused amount/value</Text>,
    cell: (info) => <Text textStyle="body-2">{info.getValue()}</Text>,
  }),
]

const EXAMPLES = [
  {
    valueOfVouchersUsed: '$10.00',
    result: 'No change will be issued by merchant.',
  },
  {
    valueOfVouchersUsed: '$5.00',
    result: 'Resident to top-up the difference of $1.00 using cash.',
  },
] as const satisfies GetChangeExampleDto[]

const GetMyChangeBack = () => {
  const table = useReactTable({
    columns: changeExampleColumn,
    data: EXAMPLES,
    // From docs (https://tanstack.com/table/v8/docs/api/features/pagination#pagecount), if row is not known `-1` can be set.
    pageCount: -1,
    getCoreRowModel: getCoreRowModel(),
    autoResetPageIndex: false,
    enableSortingRemoval: false,
    manualSorting: true,
    manualPagination: true,
    manualFiltering: true,
    enableSorting: false,
    state: {
      sorting: [],
    },
  })

  return (
    <AnswerContainer textStyle="body-2" color="content.default">
      <Text>
        Similar to other vouchers like supermarket vouchers, there will be no
        change provided if the purchase amount is less than the vouchers used.
      </Text>
      <VStack spacing="28px">
        <Text>{'For example, if the cost of item is $6,'}</Text>
      </VStack>
      <DataTable
        instance={table}
        sx={{ tableLayout: 'auto' }}
        tableCellProps={{ height: '56px', color: 'content.default' }}
        tableHeaderProps={{
          height: '56px',
          background: 'primary.100',
          color: 'primary.500',
        }}
        // TODO: Why we got two different color for divider medium
        dividerColor="divider.medium"
      />
    </AnswerContainer>
  )
}

export default GetMyChangeBack
