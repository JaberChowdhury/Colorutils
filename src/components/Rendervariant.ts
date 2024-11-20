import type { MAKE_VARIANT } from "../utils/TYPES";

const Rendervariant = (data: MAKE_VARIANT): string => {
  let data_html = "";

  for (let i = 0; i < data.length; i++) {
    data_html += `
    <div class="size-20 rounded" style="background-color:${data[i].main.color};color:${data[i].opposite.color};">
      ${data[i].main.color}
    </div>
    `;
  }

  return `<div class="w-full gap-2 flex justify-center flex-wrap">${data_html}</div>`;
};

export default Rendervariant;
