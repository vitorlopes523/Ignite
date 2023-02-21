import { useForm, useFormContext } from 'react-hook-form'
import { FormContainer, MinutesAmountInput, TaskInput } from './styles'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { CyclesContext } from '../..'


export function NewCycleForm() {
  const { activeCycle, amountSecondsPassed } = useContext(CyclesContext)
  const { register} = useFormContext()

  return (
    <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput 
          id="task" list='task-suggestions' placeholder='Dê um nome para o seu projeto'
          disabled={!!activeCycle}
          {...register('task')} />

          <datalist id='task-suggestions'>
            <option value="Projeto 1"/>
            <option value="Projeto 2"/>
            <option value="Projeto 3"/>
          </datalist>

          <label htmlFor="minuteAmount" >durante</label>
          <MinutesAmountInput 
            type="number" 
            id="minuteAmount" 
            placeholder='00' 
            step={5} 
            min={1} 
            max={60}
            disabled={!!activeCycle} 
            {...register('minutesAmount', { valueAsNumber: true})} 
          />
          <span>minutos.</span>
        </FormContainer>
  )
}