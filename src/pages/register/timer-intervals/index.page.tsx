import { getWeekDays } from '@/utils/get-week-days'
import {
  Button,
  Checkbox,
  Heading,
  MultiStep,
  Text,
  TextInput,
} from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import { Controller, useFieldArray, useForm } from 'react-hook-form'
import { RegisterContainer, RegisterHeader } from '../styles'
import {
  IntervalBox,
  IntervalContainer,
  IntervalDay,
  IntervalInputs,
  IntervalItem,
} from './styles'

// const timerIntervalFormSchema = z.object({})

export default function Timerintervals() {
  const { register, handleSubmit, control, watch } = useForm({
    defaultValues: {
      intervals: [
        {
          weekDay: '0',
          enabled: false,
          startTime: '08:00',
          endTime: '18:00',
        },
        {
          weekDay: '1',
          enabled: true,
          startTime: '08:00',
          endTime: '18:00',
        },
        {
          weekDay: '2',
          enabled: true,
          startTime: '08:00',
          endTime: '18:00',
        },
        {
          weekDay: '3',
          enabled: true,
          startTime: '08:00',
          endTime: '18:00',
        },
        {
          weekDay: '4',
          enabled: true,
          startTime: '08:00',
          endTime: '18:00',
        },
        {
          weekDay: '5',
          enabled: true,
          startTime: '08:00',
          endTime: '18:00',
        },
        {
          weekDay: '6',
          enabled: false,
          startTime: '08:00',
          endTime: '18:00',
        },
      ],
    },
  })

  const { fields } = useFieldArray({
    name: 'intervals',
    control,
  })
  // const { errors } = formState
  const interval = watch('intervals')
  const weekDays = getWeekDays()

  async function handleSetTimeIntervals() {}

  return (
    <RegisterContainer>
      <RegisterHeader>
        <Heading as="strong">Quase lá</Heading>
        <Text>
          Defina o intervalo de horários que você está disponível em cada dia da
          semana.
        </Text>
        <MultiStep size={4} currentStep={3} />
      </RegisterHeader>

      <IntervalBox as="form" onSubmit={handleSubmit(handleSetTimeIntervals)}>
        <IntervalContainer>
          {fields.map((field, index) => (
            <IntervalItem key={field.id}>
              <IntervalDay>
                <Controller
                  name={`intervals.${index}.enabled`}
                  control={control}
                  render={({ field }) => {
                    return (
                      <Checkbox
                        onCheckedChange={(checked) =>
                          field.onChange(checked === true)
                        }
                        checked={field.value}
                      />
                    )
                  }}
                />
                <Text>{weekDays[Number(field.weekDay)]}</Text>
              </IntervalDay>
              <IntervalInputs>
                <TextInput
                  size="sm"
                  type="time"
                  step={60}
                  disabled={interval[index].enabled === false}
                  {...register(`intervals.${index}.startTime`)}
                />
                <TextInput
                  size="sm"
                  type="time"
                  step={60}
                  disabled={interval[index].enabled === false}
                  {...register(`intervals.${index}.endTime`)}
                />
              </IntervalInputs>
            </IntervalItem>
          ))}
        </IntervalContainer>

        <Button type="submit">
          Proximo passo
          <ArrowRight />
        </Button>
      </IntervalBox>
    </RegisterContainer>
  )
}
