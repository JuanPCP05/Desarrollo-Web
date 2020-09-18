package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "https://localhost:4200", maxAge=3600)
@RestController
@RequestMapping({"/usuarios"})
public class UsuarioControlador {
	
@Autowired
UsuarioService servicio;

@GetMapping
public List<Usuario> listar(){
	return servicio.Listar();
}

@PostMapping
public Usuario agregar(@RequestBody Usuario u) {
	return servicio.agregar(u);
}

}
