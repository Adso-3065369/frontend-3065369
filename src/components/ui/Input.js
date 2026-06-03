/**
 * @file Input.js
 * @description Componente atómico para campos de entrada de texto, contraseña, email, etc.
 */

export const Input = ({
    label = '',
    type = 'text',         // text, password, email, number, tel, etc.
    id = '',
    name = '',
    placeholder = '',
    required = false,
    value = '',
    className = '',        // Clases para el contenedor principal (div)
    inputClass = '',       // Clases extra para modificar el input directamente
    extraAttrs = ''        // Para atributos específicos como minlength, pattern, step
} = {}) => {
    
    // 1. Clases Base de Tailwind para el Input
    // Nota: Mantenemos las clases exactas que tenías en tu vista original para no perder el diseño
    const baseInputClasses = "w-full bg-bg-surface border border-gray-700 text-white rounded-lg px-4 py-2.5 focus:border-brand focus:ring-1 focus:ring-brand transition-colors outline-none";
    const finalInputClasses = `${baseInputClasses} ${inputClass}`.trim();

    // 2. Resolución de Atributos
    const requiredAttr = required ? 'required' : '';
    const idAttr = id ? `id="${id}"` : '';
    const nameAttr = name ? `name="${name}"` : '';
    const valueAttr = value ? `value="${value}"` : '';
    
    // 3. Renderizado Condicional del Label
    // Si no se envía un label, simplemente no lo pintamos
    const labelHtml = label 
        ? `<label for="${id}" class="block text-sm font-bold text-gray-200 mb-1">${label}</label>` 
        : '';

    // 4. Renderizado del Template (Contenedor + Label + Input)
    return `
        <div class="${className}">
            ${labelHtml}
            <input 
                type="${type}" 
                ${idAttr} 
                ${nameAttr} 
                ${requiredAttr} 
                ${valueAttr}
                placeholder="${placeholder}"
                class="${finalInputClasses}"
                ${extraAttrs}
            >
        </div>
    `;
};