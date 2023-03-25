import _ from "lodash";
export function Paginate (list,currentPage,pageSize){
   const startIndex = (currentPage-1)*pageSize
return _(list).slice(startIndex).take(pageSize).value()
}