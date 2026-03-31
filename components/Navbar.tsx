import Link from "next/link"
import MaxWidhtWrapper from "./MaxWidhtWrapper"
import { Button, buttonVariants } from "./ui/button"
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs"
import { ArrowRight } from "lucide-react"

const Navbar = () =>{
    return (
        <nav className='w-full border-b'>
          <MaxWidhtWrapper>
            <div className='max-w-7xl mx-auto px-4 py-2 flex items-center justify-between'>
                <Link href="/" className='text-xl font-semibold'>Scribe</Link>    
            </div>
            {/*add mobile navbar*/}
            <div>
              <>
                <Link href="/pricing" className={buttonVariants({
                  variant: 'ghost',
                  size: 'sm'
                })}> Pricing
                </Link>
                <LoginLink className={buttonVariants({
                  variant: 'ghost',
                  size: 'sm'
                })}>Sign in

                </LoginLink>
               <RegisterLink className={buttonVariants({
                  size: 'sm'
                })}>Get Started <ArrowRight></ArrowRight></RegisterLink>
              </>
            </div>
          </MaxWidhtWrapper>
            
        </nav>
    )
}
export default Navbar