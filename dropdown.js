export function atualizarDropdown() {
    let select = document.getElementById('filtroSelect');
    if (!select) return;
    let v = select.value;
    select.innerHTML = '<option value="">📂 ITENS</option>';
    let nomes = [];
    document.querySelectorAll(".nome-prod").forEach(td => nomes.push(td.innerText.replace(/(\r\n|\n|\r)/gm, " ").trim()));
    nomes.sort().forEach(n => {
        let o = document.createElement("option");
        o.value = n;
        o.text = n;
        select.add(o);
    });
    select.value = v;
}