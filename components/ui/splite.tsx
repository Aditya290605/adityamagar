'use client'

import { Suspense, lazy } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
    scene: string
    className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
    return (
        <Suspense
            fallback={
                <div className="w-full h-full flex items-center justify-center">
                    <div className="w-8 h-8 border-2 border-indigo-light border-t-transparent rounded-full animate-spin"></div>
                </div>
            }
        >
            <Spline
                scene={scene}
                className={className}
            />
        </Suspense>
    )
}


