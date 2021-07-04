import { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isOutLined?: boolean
};

export function Button({ isOutLined = false, ...props }: ButtonProps) {
    return (
        <Container>
            <button 
                className={`button ${isOutLined ? 'outlined' : ''}`}
                {...props}
            />
        </Container>  
    )
}