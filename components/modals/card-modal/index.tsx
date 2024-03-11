'use client'

import { Dialog, DialogContent } from "@/components/ui/dialog"
import { useCardModal } from "@/hooks/use-card-modal"
import { fetcher } from "@/lib/fetcher"
import { CardWithList } from "@/types"
import { useQuery } from "@tanstack/react-query"
import Header from "./header"

type Props = {}

const CardModal = (props: Props) => {
    const { id, isOpen, onClose, onOpen } = useCardModal((state) => state)

    const { data: cardData } = useQuery<CardWithList>({
        queryKey: ['card', id],
        queryFn: () => fetcher(`/api/cards/${id}`)
    })

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                {
                    cardData
                        ? (<Header data={cardData} />)
                        : <Header.Skeleton />
                }
            </DialogContent>
        </Dialog>
    )
}

export default CardModal