'use client';

import { useState } from 'react';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetBody,
  SheetFooter,
  SheetClose,
} from '@/components/custom/ui/sheet';
import { Button } from '@/components/custom/input/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { LuPlus, LuTrash2 } from 'react-icons/lu';

export function CreateParentSheet({
  children,
}: {
  children: React.ReactNode;
}) {
  const [step, setStep] = useState<1 | 2>(1);
  const [students, setStudents] = useState([{ id: 1 }]);

  const addStudent = () => {
    setStudents([...students, { id: Date.now() }]);
  };

  const removeStudent = (id: number) => {
    if (students.length > 1) {
      setStudents(students.filter((s) => s.id !== id));
    }
  };

  return (
    <Sheet
      onOpenChange={(open) => {
        if (!open) setTimeout(() => setStep(1), 300);
      }}
    >
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="flex w-full flex-col sm:max-w-[480px]">
        <SheetHeader>
          <SheetTitle>Add parent</SheetTitle>
          <SheetDescription>
            {step === 1
              ? 'Enter the parent details. You can add their students in the next step.'
              : 'Add students associated with this parent. You can add multiple students.'}
          </SheetDescription>
        </SheetHeader>
        <SheetBody>
          {step === 1 ? (
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="e.g. Ahmed Raza" />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="e.g. ahmed@example.com"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="e.g. +92 300 1234567" />
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              {students.map((student, index) => (
                <div
                  key={student.id}
                  className="bg-muted/30 border-border group relative flex flex-col gap-3 rounded-xl border p-4"
                >
                  {students.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeStudent(student.id)}
                      className="text-muted-foreground hover:text-destructive absolute top-3 right-3 p-1 transition-colors"
                    >
                      <LuTrash2 className="size-4" />
                    </button>
                  )}
                  <div className="text-foreground text-sm font-medium">
                    Student {index + 1}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label>Student Name</Label>
                    <Input placeholder="e.g. Ali Raza" />
                  </div>
                  <div className="flex gap-3">
                    <div className="flex flex-1 flex-col gap-1.5">
                      <Label>Grade / Class</Label>
                      <Input placeholder="e.g. Grade 5" />
                    </div>
                    <div className="flex flex-1 flex-col gap-1.5">
                      <Label>Roll Number</Label>
                      <Input placeholder="e.g. 104" />
                    </div>
                  </div>
                </div>
              ))}
              <Button
                type="button"
                variant="secondary"
                onClick={addStudent}
                className="w-full border border-dashed shadow-none"
              >
                <LuPlus className="mr-2" /> Add another student
              </Button>
            </div>
          )}
        </SheetBody>
        <SheetFooter>
          {step === 1 ? (
            <>
              <SheetClose asChild>
                <Button variant="secondary">Cancel</Button>
              </SheetClose>
              <Button onClick={() => setStep(2)}>Continue</Button>
            </>
          ) : (
            <>
              <Button variant="secondary" onClick={() => setStep(1)}>
                Back
              </Button>
              <SheetClose asChild>
                <Button>Create Parent</Button>
              </SheetClose>
            </>
          )}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
