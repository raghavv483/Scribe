"use client"

import { useState } from "react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

const UploadButton = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <Dialog open={isOpen} onOpenChange={(v)=>{
        if(!v){
            setIsOpen(false)
        }
    }}>
        <DialogTrigger onClick={()=>setIsOpen(true)} asChild>
            <Button>
                Upload PDF
            </Button>
        </DialogTrigger>
        <DialogContent>
            daslfksad
        </DialogContent>
    </Dialog>
  );
}
export default UploadButton;               