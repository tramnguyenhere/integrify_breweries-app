import React, { useEffect, useState } from 'react'

import {CompanyListProps } from '../types/Company'

const withLoading = (
    ChildComponent: (data: CompanyListProps) => JSX.Element,
    url: string) => {
    return () => {
        const [data, setData] = useState([])
        const [error, setError] = useState("")
        const [loading, setLoading] = useState(true)

        useEffect(
            () => {
                fetch(url).then(
                    result => result.json()
                ).then(
                    result => { 
                        setData(result)
                        setLoading(false)
                    }
                ).catch(e => {
                    setError(e.message)
                    setLoading(false)
                })
            },
            []
        )
        if (loading) {
            return <p>Loading...</p>
        }
        if (error) {
            return <p>{error}</p>
        }
        return <ChildComponent data={data} />
    }
}

export default withLoading