import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface AboutDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AboutDialog({ open, onOpenChange }: AboutDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold text-primary">Haqqında</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 p-4 text-center">
          <p className="text-sm text-muted-foreground">
            Bu chat-bot UNECAİ klubu tərəfinndən UNEC-də məlumat əlçatanlılığını artırmaq və daha müasir həllərə əlçatanlığı təmin etmək üçün yaradılıb.
          </p>
          <div className="space-y-2 pt-4">
            <p className="font-semibold">Layihə rəhbəri:</p>
            <p>Akşin Ağaşirinov</p>
          </div>
          <div className="space-y-2">
            <p className="font-semibold">Sistem nəzarəti və APİ tuning:</p>
            <p>Turan Məsimli, Əsmər Məmmədova</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}