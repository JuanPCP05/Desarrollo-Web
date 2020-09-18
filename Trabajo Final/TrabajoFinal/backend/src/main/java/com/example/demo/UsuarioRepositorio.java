package com.example.demo;

import java.util.List;

import org.springframework.data.repository.Repository;

public interface UsuarioRepositorio extends Repository<Usuario, Integer>{
	List<Usuario>findAll();
	Usuario findOne(String cedula);
	Usuario save(Usuario u);
	void delete(Usuario u);
}
