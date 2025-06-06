import dynamic from 'next/dynamic'

export const TableComponent = dynamic(() => import('./table.component'))
