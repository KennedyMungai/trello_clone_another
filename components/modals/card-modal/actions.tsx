'use client'

import { Skeleton } from "@/components/ui/skeleton"


type Props = {}

const Actions = (props: Props) => {
    return (
        <div>
            <p>Actions</p>
        </div>
    )
}

export default Actions

Actions.Skeleton = function ActionsSkeleton() {
    return <div className="space-y-2 mt-2">
        <Skeleton className='w-20 h-4 bg-neutral-200' />
        <Skeleton className='w-full h-8 bg-neutral-200' />
        <Skeleton className='w-full h-8 bg-neutral-200' />
    </div>
}