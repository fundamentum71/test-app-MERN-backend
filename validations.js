import { body } from 'express-validator';

//регистрация
export const registerValidation = [
	body('email', 'Неверный формат почты').isEmail(),
	body('password', 'Пароль должен быть минимум 5 символов').isLength({ min: 5 }),
	body('fullName', 'Укажите имя').isLength({ min: 3 }),
	body('avatarUrl', 'Неверная ссылка на аватарку').optional().isURL(),
];

//проверку на авторизацию
export const loginValidation = [
	body('email', 'Неверный формат почты').isEmail(),
	body('password', 'Пароль должен быть минимум 5 символов').isLength({ min: 5 }),
];

//валидация для статей

//для создания статьи
export const postCreateValidation = [
	body('title', 'Введите заголовок статьи').isLength({ min: 3 }).isString(),
	body('text', 'Введите текст статьи').isLength({ min: 3 }).isString(),
	body('tags', 'Неверный формат тэгов(укажите массив)').optional().isString(),
	body('imageUrl', 'Неверная ссылка на изображение').optional().isString(),
];
