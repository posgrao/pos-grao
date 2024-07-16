import { errorHandler } from "../utils/error.js";
import bcryptjs from 'bcryptjs';
import User from '../models/user.model.js';

export const test = (req, res) => {
    res.json({ message: 'API is working fine' });
};

export const updateUser = async (req, res, next) => {
    if (req.user.id !== req.params.userId) {
        return next(errorHandler(403, 'Você não está autorizado a atualizar este usuário'));
    }
    if (req.body.password) {
        if (req.body.password.length < 6) {
            return next(errorHandler(400, 'A senha deve ter no mínimo 6 caracteres'));
        }
        req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }
    if (req.body.username) {
        if (req.body.username.length < 7 || req.body.username.length > 20) {
            return next(errorHandler(400, 'O nome de usuário deve ter entre 7 e 20 caracteres'));
        }
        // if (req.body.username.includes(' ')) {
        //     return next(errorHandler(400, 'O nome do usuário não poderá conter espaços'));
        // }
        // if (req.body.username !== req.body.username.toLowerCase()) {
        //     return next(errorHandler(400, 'O nome do usuário deve ser lowercase'));
        // }
        // if (!req.body.username.match(/^[a-zA-Z0-9]+$/)) {
        //     return next(errorHandler(400, 'Usuários podem conter apenas letras e números'));
        // }
    }
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.userId,
            {
                $set: {
                    username: req.body.username,
                    email: req.body.email,
                    profilePicture: req.body.profilePicture,
                    password: req.body.password,
                },
            },
            { new: true }
        );
        const { password, ...rest } = updatedUser._doc;
        res.status(200).json(rest);
    } catch (error) {
        next(error);
    }
};
