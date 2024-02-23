import {pool} from '../db.js';

export const home = (req, res) => res.render('home', {title: 'Home'})
export const login = (req, res) => res.render('login', {title: 'Login'})
export const registro = (req, res) => res.render('registro', {title: 'Registro'})

export const insertUsers = async (req, res) => { 
    const {nameuser, password} = req.body
    const [rows] = await pool.query('INSERT INTO users (nameuser, password) VALUES (?, ?)', [nameuser, password]);
    res.send("ok")
}

export const showUsers = async (req, res) => { 
    const [result] = await pool.query('SELECT * FROM USERS');
    res.json(rows)
}