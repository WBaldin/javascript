function subtracao(a, b) {
	return a - b;
}

const subtracao2 = (a, b) => a - b




function soma2(a) {
	return a + 2;
}

const soma2Versao2 = a => a + 2




function diaDoMes() {
	return new Date().getDate();
}

diaDoMesVersao2 = () => new Date().getDate()

console.log(diaDoMes());
console.log(diaDoMesVersao2());


function superfuncao(a, b) {
	let subtracao = a - b;
	subtracao -= 2;
	let diaDoMes = new Date().getDate();
	return diaDoMes;
}

superfuncaoVersao2 = (a, b) => {
	let subtracao = a - b;
	subtracao -= 2;
	let diaDoMes = new Date().getDate();
	return diaDoMes;
}

console.log(superfuncaoVersao2());