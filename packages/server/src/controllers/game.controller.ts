import { GameDto } from '@jspark/common';
import { Request, Response } from 'express';
import { gameServiceMock } from '../services/game.service.mock';

const getAll = (_: Request, response: Response<GameDto[]>) => {
  gameServiceMock.getAll().then((games) => {
    response.json(games);
  });
};

export const gameController = {
  getAll,
};
