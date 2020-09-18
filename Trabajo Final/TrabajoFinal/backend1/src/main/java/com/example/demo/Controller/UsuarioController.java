package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Expection.ResourceNotFoundException;
import com.example.demo.Model.Usuario;
import com.example.demo.Repository.UsuarioRepository;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/usaurios")
public class UsuarioController {
	@Autowired
    private UsuarioRepository usuarioRepository;
	@GetMapping("/usuarios")
	public List<Usuario> getAllUsuarios() {
        return usuarioRepository.findAll();
    }
	
	@GetMapping("/usuarios/{id}")
    public ResponseEntity<Usuario> getEmployeeById(@PathVariable(value = "id") Long usuarioId)
        throws ResourceNotFoundException {
        Usuario usuario = usuarioRepository.findById(usuarioId)
          .orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + usuarioId));
        return ResponseEntity.ok().body(usuario);
    }

    @PostMapping("/usuarioss")
    public Usuario createEmployee(@Validated @RequestBody Usuario usuario) {
        return usuarioRepository.save(usuario);
    }
    
    @PutMapping("/usuarios/{id}")
    public ResponseEntity<Usuario> updateEmployee(@PathVariable(value = "id") Long employeeId,
         @Valid @RequestBody Usuario employeeDetails) throws ResourceNotFoundException {
        Usuario employee = usuarioRepository.findById(employeeId)
        .orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + employeeId));

        employee.setName(employeeDetails.getName());
        employee.setApellido(employeeDetails.getApellido());
        employee.setCedula(employeeDetails.getCedula());
        employee.setCorreo(employeeDetails.getCorreo());
        employee.setDireccion(employee.getDireccion());
        final Usuario updatedEmployee = usuarioRepository.save(employee);
        return ResponseEntity.ok(updatedEmployee);
    }
    

    @DeleteMapping("/employees/{id}")
    public Map<String, Boolean> deleteEmployee(@PathVariable(value = "id") Long employeeId)
         throws ResourceNotFoundException {
        Usuario employee = usuarioRepository.findById(employeeId)
       .orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + employeeId));

        usuarioRepository.delete(employee);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
