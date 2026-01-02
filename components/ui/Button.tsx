import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: 'primary' | 'secondary' | 'ghost';
}

export function Button({ title, variant = 'primary', ...props }: ButtonProps) {
  const baseClasses = "px-6 py-4 rounded-lg items-center justify-center";

  const variantClasses = {
    primary: "bg-saffron",
    secondary: "bg-navy",
    ghost: "border-2 border-saffron",
  };

  const textClasses = {
    primary: "text-white font-semibold text-lg",
    secondary: "text-white font-semibold text-lg",
    ghost: "text-saffron font-semibold text-lg",
  };

  return (
    <TouchableOpacity
      className={`${baseClasses} ${variantClasses[variant]}`}
      {...props}
    >
      <Text className={textClasses[variant]}>{title}</Text>
    </TouchableOpacity>
  );
}
