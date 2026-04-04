'use client'

import { useSearchParams, useRouter } from "next/navigation"
import { trpc } from "../_trpc/client"
import { useEffect, useState } from "react"

const Page = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [data, setData] = useState<string | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const origin = searchParams.get('origin')
        
        const fetchData = async () => {
            try {
                const result = await trpc.test.query()
                setData(result)
            } catch (error) {
                console.error('Error:', error)
            } finally {
                setLoading(false)
            }
        }
        
        fetchData()
    }, [searchParams])

    if (loading) return <div>Loading...</div>

    return (
        <div>
            <p>Data: {data}</p>
        </div>
    )
}

export default Page