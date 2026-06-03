# BITÁCORA DE INSPECCIÓN DE FRONTEND - PROYECTO DE DESARROLLO

> **NOTA PEDAGÓGICA:** Un frontend funcional no es solo que "se vea bonito". Es que el estado de la aplicación sea predecible y los errores de red estén bajo control. Si el usuario puede romper la interfaz, tu código no ha pasado la inspección.

---

## 1. Información General
- **ID del Proyecto:** __________________________
- **Módulo / Componente:** _____________________
- **Desarrollador / Inspector:** _________________
- **Fecha:** __________________________________

---

## 2. Análisis del Escenario (Ingeniería de UI/UX)
*Define el contrato de comportamiento de tu componente antes de programar:*

*   **Descripción del proceso:** 
    > (Explica qué debe hacer la UI paso a paso: clic, carga, petición, respuesta).
*   **Precondición:** 
    > (Estado necesario: ej: "Token en localStorage", "Datos de API cargados").
*   **Flujos Alternos (UI):** 
    > (¿Qué pasa si la API falla? ¿Cómo se ve si no hay datos? ¿Qué pasa si el input es erróneo?).
*   **Poscondición:** 
    > (Estado final de la interfaz: ej: "Spinner de carga oculto", "Mensaje de éxito visible", "Redirección ejecutada").

---

## 3. Matriz de Inspección Lógica (Frontend)
*Analiza el componente. Busca brechas en la reactividad y el manejo de estados.*

| ID | Archivo / Componente | Hallazgo (Brecha de UI/Estado/Red) | Acción Correctiva (Plan técnico) |
| :--- | :--- | :--- | :--- |
| **001** | | | |
| **002** | | | |

---

## 4. Verificación y Cierre (POST-DESARROLLO)
*Se llena solo después de haber programado la solución.*

### A. Descripción técnica de la solución implementada
> (Ej: "Se agregó un estado `loading` para bloquear el botón durante la petición POST y un `catch` para mostrar un `toast` de error").
__________________________________________________________________________

### B. Evidencia de Verificación (Proof of Success)
* [ ] **Responsive:** Se validó que el componente no se rompe en pantallas pequeñas.
* [ ] **UX/Feedback:** El usuario recibe retroalimentación inmediata ante acciones.
* [ ] **Prueba:** Adjunto captura de pantalla / video / log de consola.

---

## 5. Criterios de Aceptación (Checklist de Calidad)
*El desarrollador debe marcar este checklist antes de enviar el PR.*

* [ ] **Manejo de Errores:** ¿La interfaz colapsa si el backend responde 404/500?
* [ ] **Consistencia:** ¿El estado del componente refleja fielmente los datos de la API?
* [ ] **Evidencia:** La Bitácora está completa y adjunta al PR.
* [ ] **Estándares:** El código respeta el Contrato de Calidad (y no tiene lógica de negocio "hardcodeada").

---

## 6. Firma del Desarrollador
*Certifico que he realizado el análisis de interfaz y el componente es resiliente a fallos.*

**Firma del Desarrollador:** ___________________________

---

## 7. Aprobación Final del Instructor (Gatekeeper)

**Estado de la Inspección:** 
[ ] **APROBADA** (Pase a producción)
[ ] **RECHAZADA** (Se requiere re-inspección)

*Comentarios del Instructor:*
__________________________________________________________________________

**Firma del Instructor:** ___________________________
**Fecha de Cierre:** ________________________________

---

## ANEXO: Las 4 Reglas de Oro del Frontend (Para el aprendiz)
1. **La API no es confiable:** Nunca asumas que el backend siempre responde. Si tu interfaz no maneja estados de error (`catch`), tu código está incompleto.
2. **El estado no miente:** Si el dato en pantalla no coincide con el dato en el estado (`state/store`), tienes un bug. Depura el flujo de datos.
3. **Calidad sobre efectos visuales:** Prefiero una interfaz simple que funciona perfectamente ante errores de red, que una interfaz llena de animaciones que se rompe si el internet es lento.
4. **Pensamiento crítico:** ¿Qué pasa si el usuario hace clic 5 veces al botón? ¿Qué pasa si recarga la página en medio de la petición? *Anticípate a la impaciencia del usuario.*