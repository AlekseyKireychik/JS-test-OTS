// task02

const queryStr = "size=M&color=1&color=2&manufacturer=aaa&manufacturer=eee";

const search = new URLSearchParams(queryStr);
					// http://любой_домен/filter?size=M&color=1,2&manufacturer=aaa,eee
					console.log(search);

for(const [key, value] of search) {

	console.log(`${key}`, `${value}`);

	const e = document.querySelector("form").elements[key];

	if(!e) continue;

	switch(e.constructor) {
		case RadioNodeList:
			for(const node of e) {
				if(node.value === value)
					node.checked = true;
			}
			break;
		case HTMLSelectElement:
			for(const option of e) {
				if(option.value === value)
					option.selected = true;
			}
			break;
		case HTMLInputElement:
			e.value = value;			
			if(e.type === "checkbox")
				e.checked = true;
			break;
	}
}

// при изменении состояния в любом инпуте... выведет в консоль аналогичный приведённому в условии url с актуальными значениями фильтров
addEventListener("input", ({ target }) => {

	if(!target.matches("form [name]")) return;

	const url = `${new URLSearchParams(new FormData(target.form))}`;

	console.log(url);

});
