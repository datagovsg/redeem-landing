// TODO refactor when it does get huge
// I am trolling here. There isnt a need for function since i can just use index and this are static so key are fines!
export function genStepIndexForInstructions<T>(instructions: T[]) {
  return instructions.map((instruction, i) => ({
    ...instruction,
    stepIndex: i + 1,
  }))
}
