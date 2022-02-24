import React ,{ Component } from "react";

import SVG from 'react-inlinesvg'

// export default function Pagination({}) {
//   return (
//     <div className="flex relative justify-between p-2">
//       <div className="flex relative">
//         {' '}
//         <button className="relative bg-white px-2 rounded-md">
//           <SVG src={'/assets/svg/double-arrow-left.svg'}></SVG>
//         </button>
//         <button className="relative bg-white px-2 rounded-md mx-2">
//           <SVG src={'/assets/svg/arrow-left.svg'}></SVG>
//         </button>
//         <button className="relative text-blue-800 text-2xl px-2 rounded-md mx-2">
//           ...
//         </button>
//         <button className="relative  font-12 px-2 rounded-md mx-2">23</button>
//         <button className="relative bg-blue-800 text-white font-12 px-2 rounded-md mx-2">
//           24
//         </button>
//         <button className="relative  font-12 px-2 rounded-md mx-2">25</button>
//         <button className="relative  font-12 px-2 rounded-md mx-2">26</button>
//         <button className="relative  font-12 px-2 rounded-md mx-2">27</button>
//         <button className="relative text-blue-800 text-2xl px-2 rounded-md mx-2">
//           ...
//         </button>
//         <button className="relative bg-white px-2 rounded-md mx-2">
//           <SVG src={'/assets/svg/arrow-right.svg'}></SVG>
//         </button>
//         <button className="relative bg-white px-2 rounded-md">
//           <SVG src={'/assets/svg/double-arrow-right.svg'}></SVG>
//         </button>
//       </div>
//       <div className="flex">
//       <select className="relative bg-gray-50 font-BwN font-12 rounded-lg w-50 h-8 text-gray-800 outline-none p-1 pr-5 mx-4">
//                 <option>10</option>
//                 <option>20</option>
//                 <option>50</option>
//               </select>

//               <span className="font-12 m-2">Displaying 10 of 230 records</span>
//       </div>
//     </div>
//   )
// }


// const propTypes = {
//   items: React.PropTypes.array.isRequired,
//   onChangePage: React.PropTypes.func.isRequired,
//   initialPage: React.PropTypes.number    
// }

const defaultProps = {
  initialPage: 1
}



export default class PaginationEx extends Component {
  constructor(props) {
    super(props);
    this.state = { pager: {},totalItems:0,pageSize:10 };
    this.handlePageSizeChanger=this.handlePageSizeChanger.bind(this);
}



handlePageSizeChanger =(e)=>{
  this.setState({
    pageSize:e.target.value
  },()=>{
    this.setPage(1)
  })
}

componentWillMount() {
  // set page if items array isn't empty
  if (this.props.items && this.props.items.length) {
      this.setPage(this.props.initialPage);
  }
}

componentDidUpdate(prevProps, prevState) {
  // reset page if items array has changed
  if (this.props.items !== prevProps.items) {
      this.setPage(this.props.initialPage);
  }
}

setPage(page) {
  var items = this.props.items;
  this.setState({totalItems:items.length})
  var pager = this.state.pager;

  if (page < 1 || page > pager.totalPages) {
      return;
  }

  // get new pager object for specified page
  pager = this.getPager(items.length, page,this.state.pageSize);

  // get new page of items from items array
  var pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);

  // update state
  this.setState({ pager: pager });
  console.log({pager})
  // call change page function in parent component
  this.props.onChangePage(pageOfItems);
}

getPager(totalItems, currentPage, pageSize) {
  // default to first page
  currentPage = currentPage || 1;

  // default page size is 10
  pageSize = pageSize || 10;

  // calculate total pages
  var totalPages = Math.ceil(totalItems / pageSize);

  var startPage, endPage;
  if (totalPages <= 10) {
      // less than 10 total pages so show all
      startPage = 1;
      endPage = totalPages;
  } else {
      // more than 10 total pages so calculate start and end pages
      if (currentPage <= 6) {
          startPage = 1;
          endPage = 10;
      } else if (currentPage + 4 >= totalPages) {
          startPage = totalPages - 9;
          endPage = totalPages;
      } else {
          startPage = currentPage - 5;
          endPage = currentPage + 4;
      }
  }

  // calculate start and end item indexes
  var startIndex = (currentPage - 1) * pageSize;
  var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

  // create an array of pages to ng-repeat in the pager control
  var pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);

  // return object with all pager properties required by the view
  return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
  };



  
}




render() {
  var pager = this.state.pager;

        if (!pager.pages || pager.pages.length <= 1) {
            // don't display pager if there is only 1 page
            return null;
        }


        return (

<div className="flex relative justify-between p-2">
      <div className="flex relative">
        {' '}
        <button onClick={() => this.setPage(1)} className={pager.currentPage === 1 ? 'relative bg-white px-2 rounded-md disabled' : 'relative bg-white px-2 rounded-md'}  >
          <SVG src={'/assets/svg/double-arrow-left.svg'}></SVG>
        </button>
        <button onClick={() => this.setPage(pager.currentPage - 1)} className={pager.currentPage === 1 ? 'disabled relative bg-white px-2 rounded-md mx-2' : 'relative bg-white px-2 rounded-md mx-2'} >
          <SVG src={'/assets/svg/arrow-left.svg'}></SVG>
        </button>
        {pager.pages.map((page, index) =>
                    <button onClick={() => this.setPage(page)} className={pager.currentPage === page ? 'relative bg-blue-800 text-white font-12 px-2 rounded-md mx-2' : 'relative  font-12 px-2 rounded-md mx-2'}>{page}</button>
                )}
        
        <button onClick={() => this.setPage(pager.currentPage + 1)} className="relative bg-white px-2 rounded-md mx-2">
          <SVG src={'/assets/svg/arrow-right.svg'}></SVG>
        </button>
        <button onClick={() => this.setPage(pager.totalPages)} className="relative bg-white px-2 rounded-md">
          <SVG  src={'/assets/svg/double-arrow-right.svg'}></SVG>
        </button>
      </div>
      <div className="flex">
      <select value={this.state.pageSize} onChange={this.handlePageSizeChanger} className="relative bg-gray-50 font-BwN font-12 rounded-lg w-50 h-8 text-gray-800 outline-none p-1 pr-5 mx-4 mt-2">
                <option value='10'>10</option>
                <option value='20'>20</option>
                <option value='50'>50</option>
              </select>

              <span className="font-12 m-2">Displaying {this.state.pageSize} of {this.state.totalItems}  records</span>
      </div>
    </div>




        )











        
}


}