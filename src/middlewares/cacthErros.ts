import { Request, Response, NextFunction } from 'express'

async function catchErros (error: Error, request: Request, response: Response, next: NextFunction) {
  return (
    response.status(401).json({
      status: 'Error',
      message: error.message
    })
  )
}

export default catchErros