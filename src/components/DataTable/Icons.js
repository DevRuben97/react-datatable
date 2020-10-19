/* eslint-disable prettier/prettier */
import React from 'react'
import {
  FaSyncAlt,
  FaFileDownload,
  FaFilePdf,
  FaFileCsv,
  FaPlus,
  FaSearch,
  FaArrowDown,
  FaArrowUp,
  FaArrowLeft,
  FaArrowRight,
  FaEdit,
  FaTrashAlt,
  FaFilter,
  FaEllipsisH,
  FaAngleDown,
  FaTimes,
  FaCog
} from 'react-icons/fa'

export const TableIcons = {
  Update: () => <FaSyncAlt />,
  Downloand: () => <FaFileDownload />,
  ExportPdf: () => <FaFilePdf />,
  ExportCsv: () => <FaFileCsv />,
  Filter: () => <FaFilter />,
  Add: () => <FaPlus />,
  Edit: () => <FaEdit />,
  Delete: () => <FaTrashAlt />,
  Search: () => <FaSearch />,
  Cancel: ()=> <FaTimes/>,
  UpArrow: () => <FaArrowUp />,
  DownArrow: () => <FaArrowDown />,
  DownArrowFilter: ()=> <FaAngleDown/>,
  LeftArrow: () => <FaArrowLeft />,
  RigthArrow: () => <FaArrowRight />,
  RowMenu: ()=> <FaEllipsisH />,
  ViewConfig: ()=> <FaCog/>
}
