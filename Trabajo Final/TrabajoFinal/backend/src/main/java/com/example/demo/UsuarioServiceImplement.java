package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsuarioServiceImplement implements UsuarioService{
	@Autowired
	private UsuarioRepositorio repositorio;
	
	public List<Usuario> Listar() {
		return repositorio.findAll();
	}

	public Usuario listarCedula(String cedula) {
		// TODO Auto-generated method stub
		return null;
	}

	public Usuario agregar(Usuario u) {
		return repositorio.save(u);
	}

	public Usuario editar(Usuario u) {
		// TODO Auto-generated method stub
		return null;
	}

	public Usuario eliminar(String cedula) {
		// TODO Auto-generated method stub
		return null;
	}

}
