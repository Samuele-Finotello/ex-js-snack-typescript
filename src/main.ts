// SNACK 1 
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
else if (APIDates === null) {
  console.log('Il dato è vuoto')
}
else if (Array.isArray(APIDates)) {
  console.log(APIDates.length)
}
else if (APIDates instanceof Promise) {
  APIDates.then(message => console.log(message))
}
else {
  console.log('Tipo non supportato')
}

// SNACK 2
type Dipendente = {
  nome: string,
  cognome: string,
  annoNascita: number,
  sesso: 'm' | 'f',
  anniDiServizio: [number, ...number[]],
  readonly emailAziendale: string,
  contratto: 'indeterminato' | 'determinato' | 'freelance'
};

// SNACK 3
let Developer: Dipendente & {
  livelloEsperienza: 'Junior' | 'Mid' | 'Senior',
  linguaggi?: string[],
  certificazioni: string[]
}

let ProjectManager: Dipendente & {
  teamSize: number | null,
  budgetGestito?: number,
  stakeholderPrincipali: string[]
}