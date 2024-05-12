/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LayoutImport } from './routes/_layout'
import { Route as LayoutPerformanceImport } from './routes/_layout/performance'
import { Route as LayoutFaceRecognitionImport } from './routes/_layout/face-recognition'
import { Route as LayoutFaceDetectionImport } from './routes/_layout/face-detection'

// Create Virtual Routes

const AboutLazyImport = createFileRoute('/about')()
const LayoutIndexLazyImport = createFileRoute('/_layout/')()

// Create/Update Routes

const AboutLazyRoute = AboutLazyImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about.lazy').then((d) => d.Route))

const LayoutRoute = LayoutImport.update({
  id: '/_layout',
  getParentRoute: () => rootRoute,
} as any)

const LayoutIndexLazyRoute = LayoutIndexLazyImport.update({
  path: '/',
  getParentRoute: () => LayoutRoute,
} as any).lazy(() => import('./routes/_layout/index.lazy').then((d) => d.Route))

const LayoutPerformanceRoute = LayoutPerformanceImport.update({
  path: '/performance',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutFaceRecognitionRoute = LayoutFaceRecognitionImport.update({
  path: '/face-recognition',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutFaceDetectionRoute = LayoutFaceDetectionImport.update({
  path: '/face-detection',
  getParentRoute: () => LayoutRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_layout': {
      preLoaderRoute: typeof LayoutImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      preLoaderRoute: typeof AboutLazyImport
      parentRoute: typeof rootRoute
    }
    '/_layout/face-detection': {
      preLoaderRoute: typeof LayoutFaceDetectionImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/face-recognition': {
      preLoaderRoute: typeof LayoutFaceRecognitionImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/performance': {
      preLoaderRoute: typeof LayoutPerformanceImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/': {
      preLoaderRoute: typeof LayoutIndexLazyImport
      parentRoute: typeof LayoutImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  LayoutRoute.addChildren([
    LayoutFaceDetectionRoute,
    LayoutFaceRecognitionRoute,
    LayoutPerformanceRoute,
    LayoutIndexLazyRoute,
  ]),
  AboutLazyRoute,
])

/* prettier-ignore-end */