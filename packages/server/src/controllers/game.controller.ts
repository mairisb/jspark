import { GameDto } from '@jspark/common';
import { Request, Response } from 'express';
import { gameServiceMock } from '../services/game.service.mock';

const getAll = (_req: Request, res: Response<GameDto[]>) => {
  return gameServiceMock.getAll().then((games) => {
    res.json(games);
  });
};

export const gameController = {
  getAll,
};
