/* eslint-disable prettier/prettier */
export default class DataManager {
  constructor(isRemoteData,remoteData) {
    this.remoteData = remoteData;
    this.isRemoteData= isRemoteData;
  }

  getTableProps() {
    return {
      pageNumber: 1,
      pageSize: 10,
      search: '',
      orderBy: {
        by: 'id',
        isDescending: false
      },
      filters: {}
    }
  }

  getPaginationProps(){
      return {
        pageNumber: 1,
        pageSize: 0,
        totalPages: 0,
        nextPage: 0,
        previousPage: 0,
        totalRecords: 0
      }
  }


  setData(data){

  }

  getData(){

  }



  paginate(page){

  }

  filter(values){

  }

  orderBy(column){

  }

  changePageSize(size){

  }

}
