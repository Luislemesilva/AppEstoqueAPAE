import { AbstractControl, ValidatorFn } from '@angular/forms';

export function passwordMatchValidator(password: string, confirmPassword: string): ValidatorFn {
  return (formGroup: AbstractControl) => {
    const passwordControl = formGroup.get(password);
    const confirmPasswordControl = formGroup.get(confirmPassword);

    // Verificar se ambos os controles existem
    if (!passwordControl || !confirmPasswordControl) {
      return null;
    }

    // Verificar se as senhas são diferentes
    if (passwordControl.value !== confirmPasswordControl.value) {
      confirmPasswordControl.setErrors({ passwordMismatch: true });
    } else {
      confirmPasswordControl.setErrors(null); // Remove o erro se as senhas forem iguais
    }

    return null;
  };
}
