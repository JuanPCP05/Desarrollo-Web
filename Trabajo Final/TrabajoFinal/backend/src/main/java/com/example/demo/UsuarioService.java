package com.example.demo;

import java.util.List;

public interface UsuarioService {
	List<Usuario>Listar();
	Usuario listarCedula(String cedula);
	Usuario agregar(Usuario u);
	Usuario editar(Usuario u);
	Usuario eliminar(String cedula);
}
