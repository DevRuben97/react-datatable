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
  FaEllipsisH
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
  UpArrow: () => <FaArrowUp />,
  DownArrow: () => <FaArrowDown />,
  LeftArrow: () => <FaArrowLeft />,
  RigthArrow: () => <FaArrowRight />,
  RowMenu: ()=> <FaEllipsisH />
}
