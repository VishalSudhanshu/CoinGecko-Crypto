import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'

function CustomerErrorBoundaryUI({error, resetErrorBoundary}) {
    return (
        <div className="h-[100vh] flex justify-center items-center px-6">
            <div role="alert" className="alert alert-error flex md:flex-row flex-col justify-between items-center md:px-6">
                <p>Something went wrong</p>
                <div>{error?.message}</div>
                <button className='btn' onClick={resetErrorBoundary}>Try again</button>
            </div>
        </div>
    )
}

export default function CustomErrorBoundary({ children }) {
    return (
        <ErrorBoundary
            FallbackComponent={CustomerErrorBoundaryUI}
            onReset={() => window.location.reload()}
        >
            {children}
        </ErrorBoundary>
    )
}
