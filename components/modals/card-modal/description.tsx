'use client'

import { Skeleton } from "@/components/ui/skeleton"
import { CardWithList } from "@/types"

type Props = {
    data: CardWithList
}

const Description = ({ data }: Props) => {
    return (
        <div>{data.description}</div>
    )
}

export default Description

Description.Skeleton = function DescriptionSkeleton() {
    return <div className="flex items-start gap-x-3 w-full">
        <Skeleton className='h-6 w-6 bg-neutral-200' />
        <div className="w-full">
            <Skeleton className='w-24 h-6 mb-2 bg-neutral-200' />
            <Skeleton className='w-full h-[78px] mb-2 bg-neutral-200' />
        </div>
    </div>
}