'use client'

import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import {
  Dialog,
  DialogContent,
  DialogDescription, DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/Dialog'
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/Form'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'

const formSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  image: z.string().min(1, 'Image is required')
})

const CreateServerModal: FC = () => {
  const form = useForm({
    defaultValues: {
      name: '',
      image: ''
    },
    resolver: zodResolver(formSchema)
  })

  const isSubmitting = form.formState.isSubmitting

  const onSubmit = form.handleSubmit(async (values) => {
    console.log(values)
  })

  return (
    <Dialog>
      <DialogTrigger>Create Server</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Customize your server</DialogTitle>
          <DialogDescription>
            Give your server a personality with a name and an image. You can always change these later.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <Form {...form}>
            <form onSubmit={onSubmit}>
              <div className="space-y-8">
                <div className="w-full flex items-center justify-center text-center">
                  <FormField
                    name="name"
                    render={({ field, formState }) => (
                      <FormItem className="w-full flex items-center gap-2">
                        <FormLabel className="text-nowrap">Server name:</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            disabled={isSubmitting}
                            placeholder="Server name"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </form>
          </Form>
          <DialogFooter>
            <Button>Create</Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default CreateServerModal