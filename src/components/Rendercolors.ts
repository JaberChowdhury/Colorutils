import type { HEXADECIMAL } from "../utils/TYPES";
import Codehighlighter from "./Codehighlighter";
import Utils from "../utils/main";

const Rendercolors = (data: HEXADECIMAL[]): string => {
  let data_html = "";
  for (let i = 0; i < data.length; i++) {
    const color_data = new Utils(data[i].main.color).getColor();
    const code_data = Codehighlighter(
      JSON.stringify({ ...color_data, variant: [] }, null, 2),
    );

    data_html += `
      <div
      style="background-color:${data[i].main.color};color:${data[i].main.color};"
      class="box size-44 rounded relative overflow-hidden"
      >
        <div class="circle" style="background-color:${data[i].opposite.color};"></div>
        <div class="w-full flex justify-center flex-col gap-y-10 relative data text-3xl">
          <div>
          <div class="">${data[i].main.color}</div>
          <div class="">${data[i].opposite.color}</div>
          </div>
           
<button class="btn w-4/5" onclick="my_modal_${i}.showModal()">More info</button>
<dialog id="my_modal_${i}" class="modal modal-bottom sm:modal-middle">
  <div class="modal-box text-xl p-2">
    ${code_data}
    <div class="modal-action">
      <form method="dialog">
        <button class="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
        
        </div>
      </div>
    `;
  }

  return `
  <div class="w-full flex gap-2 justify-center items-center flex-wrap">
    ${data_html}
  </div>
  `;
};

export default Rendercolors;
