let APIDates: unknown | null;

if (typeof APIDates === 'string') {
  console.log(APIDates.toUpperCase())
}
else if (typeof APIDates === 'number') {
  console.log(APIDates * 2)
}
else if (typeof APIDates === 'boolean') {
  console.log(APIDates ? 'Si' : 'No')
}
else {
  console.log('Tipo non supportato')
}