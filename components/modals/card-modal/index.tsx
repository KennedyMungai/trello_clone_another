'use client'

import { Dialog, DialogContent } from "@/components/ui/dialog"
import { useCardModal } from "@/hooks/use-card-modal"

type Props = {}

const CardModal = (props: Props) => {
    const { id, isOpen, onClose, onOpen } = useCardModal((state) => state)

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                I am a modal
            </DialogContent>
        </Dialog>
    )
}

export default CardModal