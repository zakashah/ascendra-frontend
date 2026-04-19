'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/custom/input/button';
import { MainContent } from '@/components/custom/layout/main-content';
import { PageHeader } from '@/components/custom/layout/page-header';
import { PageHeaderAction } from '@/components/custom/layout/page-header-action';
import { PageHeaderGroup } from '@/components/custom/layout/page-header-group';
import { PageMain } from '@/components/custom/layout/page-main';
import { PageTitle } from '@/components/custom/layout/page-title';
import { PageSubTitle } from '@/components/custom/layout/page-sub-title';
import { Input } from '@/components/custom/input/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { LuArrowLeft, LuPlus, LuTrash2, LuSave, LuSend } from 'react-icons/lu';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/custom/ui/select';

export default function CreateInvoicePage() {
  const router = useRouter();

  // Form State
  const [currency, setCurrency] = useState('Rs');
  const [parentName, setParentName] = useState('');
  const [paidBy, setPaidBy] = useState('');
  const [studentName, setStudentName] = useState('');
  const [invoiceNumber, setInvoiceNumber] = useState('INV-2026-007');
  const [issueDate, setIssueDate] = useState('2026-10-01');
  const [dueDate, setDueDate] = useState('2026-10-15');
  const [notes, setNotes] = useState('');

  const [items, setItems] = useState([
    { id: 1, name: 'Tuition Fee (Monthly)', qty: 1, price: 15000 },
  ]);

  const addItem = () => {
    setItems([...items, { id: Date.now(), name: '', qty: 1, price: 0 }]);
  };

  const removeItem = (id: number) => {
    if (items.length > 1) {
      setItems(items.filter((item) => item.id !== id));
    }
  };

  const calculateSubtotal = () => {
    return items.reduce((acc, item) => acc + item.qty * item.price, 0);
  };

  const total = calculateSubtotal();

  return (
    <>
      <PageHeader className="border-b-0 pb-0">
        <PageHeaderGroup>
          <div className="flex items-start">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => router.back()}
              className="text-muted-foreground hover:bg-muted hover:text-foreground h-8 w-8 rounded-full transition-colors"
            >
              <LuArrowLeft className="size-4" />
            </Button>
            <div>
              <PageTitle>Create New Invoice</PageTitle>
              <PageSubTitle>
                Fill out the details below to generate a new invoice.
              </PageSubTitle>
            </div>
          </div>
        </PageHeaderGroup>
        <PageHeaderAction>
          <div className="flex items-center gap-3">
            <Button variant="secondary">
              <LuSave className="mr-2" /> Save Draft
            </Button>
            <Button>
              <LuSend className="mr-2" /> Create Invoice
            </Button>
          </div>
        </PageHeaderAction>
      </PageHeader>

      <PageMain className="p-0">
        <MainContent className="flex h-[calc(100vh-140px)] w-full max-w-none flex-col overflow-hidden bg-white p-0 lg:flex-row dark:bg-(--color-gray-1500)">
          {/* LEFT PANEL: Form */}
          <div className="border-border w-full shrink-0 overflow-y-auto border-r p-6 lg:w-[450px] lg:p-8 xl:w-[500px]">
            <div className="flex flex-col gap-10 pb-20">
              {/* Preferences */}
              <div className="flex gap-4">
                <div className="flex flex-col gap-2">
                  <Label className="text-sm">Language</Label>
                  <Input
                    defaultValue={'English'}
                    readOnly
                    className="cursor-not-allowed border-transparent bg-gray-50/50"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2">
                  <Label className="text-sm">Currency</Label>
                  <Select
                    value={currency}
                    // onChange={(e) => setCurrency(e.target.value)}
                    // className="border-input focus:ring-ring flex h-9 w-full items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm shadow-sm focus:ring-1 focus:outline-none"
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select currency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="Rs">PKR (Rs)</SelectItem>
                        <SelectItem value="$">USD ($)</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Client Details */}
              <div className="flex flex-col gap-4">
                <Label className="text-muted-foreground border-border border-b pb-2 text-[10px] font-bold tracking-widest uppercase">
                  Client Details
                </Label>
                <div className="flex w-full items-center gap-4">
                  <div className="flex flex-col gap-2">
                    <Label className="text-sm">Billed To (Parent)</Label>
                    <Input
                      placeholder="e.g. Ahmed Raza"
                      value={parentName}
                      onChange={(e) => setParentName(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-2">
                    <Label className="text-sm">Student</Label>
                    <Input
                      placeholder="e.g. Ali Raza"
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Invoice Meta */}
              <div className="flex flex-col gap-4">
                <Label className="text-muted-foreground border-border border-b pb-2 text-[10px] font-bold tracking-widest uppercase">
                  Invoice Details
                </Label>
                <div className="mt-1 flex flex-col gap-4">
                  <div className="flex flex-col gap-1.5">
                    <Label className="text-sm">Invoice Number</Label>
                    <Input
                      value={invoiceNumber}
                      onChange={(e) => setInvoiceNumber(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Dates */}
              <div className="flex flex-col gap-4">
                <Label className="text-muted-foreground border-border border-b pb-2 text-[10px] font-bold tracking-widest uppercase">
                  Dates
                </Label>
                <div className="mt-1 grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <Label className="text-sm">Issue Date</Label>
                    <Input
                      type="date"
                      value={issueDate}
                      onChange={(e) => setIssueDate(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label className="text-sm">Due Date</Label>
                    <Input
                      type="date"
                      value={dueDate}
                      onChange={(e) => setDueDate(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Line Items */}
              <div className="flex flex-col gap-4">
                <div className="border-border flex items-center justify-between border-b pb-2">
                  <Label className="text-muted-foreground text-[10px] font-bold tracking-widest uppercase">
                    Line Items
                  </Label>
                  <span className="text-foreground text-xs font-semibold">
                    Total: {currency} {total.toLocaleString()}
                  </span>
                </div>

                <div className="mt-1 flex flex-col gap-3">
                  {items.map((item, index) => (
                    <div
                      key={item.id}
                      className="group border-border relative flex flex-col gap-3 rounded-lg border bg-gray-50/50 p-3 dark:bg-black/10"
                    >
                      <div className="flex items-center justify-between">
                        <Label className="text-muted-foreground text-[10px] font-semibold">
                          ITEM {index + 1}
                        </Label>
                        {items.length > 1 && (
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-muted-foreground hover:text-destructive transition-colors"
                          >
                            <LuTrash2 className="size-3.5" />
                          </button>
                        )}
                      </div>
                      <Input
                        placeholder="Description (e.g. Tuition Fee)"
                        value={item.name}
                        onChange={(e) => {
                          const newI = [...items];
                          newI[index].name = e.target.value;
                          setItems(newI);
                        }}
                      />
                      <div className="flex gap-3">
                        <div className="flex w-24 flex-col gap-1.5">
                          <Label className="text-[10px] uppercase">Qty</Label>
                          <Input
                            type="number"
                            min="1"
                            className="text-center"
                            value={item.qty}
                            onChange={(e) => {
                              const newI = [...items];
                              newI[index].qty = parseInt(e.target.value) || 0;
                              setItems(newI);
                            }}
                          />
                        </div>
                        <div className="relative flex flex-1 flex-col gap-1.5">
                          <Label className="text-[10px] uppercase">
                            Amount
                          </Label>
                          <span className="text-muted-foreground absolute top-7 left-3 text-sm">
                            {currency}
                          </span>
                          <Input
                            type="number"
                            className="pl-8"
                            value={item.price}
                            onChange={(e) => {
                              const newI = [...items];
                              newI[index].price = parseInt(e.target.value) || 0;
                              setItems(newI);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={addItem}
                    className="mt-2 w-full border border-dashed shadow-none"
                  >
                    <LuPlus className="mr-2 size-4" /> Add Line Item
                  </Button>
                </div>
              </div>

              {/* Notes */}
              <div className="flex flex-col gap-4">
                <Label className="text-muted-foreground border-border border-b pb-2 text-[10px] font-bold tracking-widest uppercase">
                  Additional Notes
                </Label>
                <Textarea
                  className="mt-1 min-h-[100px]"
                  placeholder="e.g. Late fees apply after due date. Please ensure payment includes student ID in reference."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* RIGHT PANEL: Live Preview */}
          <div className="relative flex w-full flex-1 justify-center overflow-y-auto bg-gray-100/80 p-6 lg:p-12 dark:bg-[#0a0a0c]">
            {/* The A4 Paper */}
            <div className="animate-in fade-in flex h-fit min-h-[950px] w-full max-w-[750px] shrink-0 flex-col rounded-sm bg-white p-12 tracking-tight text-gray-900 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] ring-1 ring-black/5 duration-500 sm:p-16">
              {/* Print Header */}
              <div className="flex flex-col items-start justify-between gap-8 pb-10 sm:flex-row">
                <div className="flex flex-col">
                  <div className="text-3xl font-bold tracking-tighter text-gray-900">
                    Ascendra Pay
                  </div>
                  <div className="mt-1 text-sm text-gray-500">
                    Financial Management for Schools
                  </div>

                  <div className="mt-8 flex flex-col text-sm text-gray-600">
                    <span>123 Education Lane</span>
                    <span>Knowledge City, KC 12345</span>
                    <span>support@ascendrapay.com</span>
                  </div>
                </div>
                <div className="flex flex-col items-start sm:items-end sm:text-right">
                  <div className="text-3xl font-light tracking-widest text-gray-300 uppercase">
                    Invoice
                  </div>
                  <div className="mt-2 text-sm font-medium text-gray-900">
                    {invoiceNumber || 'INV-XXXXX'}
                  </div>
                </div>
              </div>

              {/* Meta Info Grid - exactly like design */}
              <div className="grid grid-cols-2 gap-8 border-t border-b border-gray-100 py-10 md:grid-cols-4">
                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                    Billed To
                  </span>
                  <span className="text-sm font-semibold text-gray-900">
                    {parentName || 'Parent Name'}
                  </span>
                  {paidBy && (
                    <span className="text-xs text-gray-500">{paidBy}</span>
                  )}
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                    Student
                  </span>
                  <span className="text-sm font-medium text-gray-700">
                    {studentName || 'Student Name'}
                  </span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                    Date Issued
                  </span>
                  <span className="text-sm font-medium text-gray-700">
                    {issueDate
                      ? new Date(issueDate).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })
                      : '-'}
                  </span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                    Due Date
                  </span>
                  <span className="text-sm font-semibold text-gray-900">
                    {dueDate
                      ? new Date(dueDate).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })
                      : '-'}
                  </span>
                </div>
              </div>

              {/* Line Items Table */}
              <div className="mt-10 flex flex-col">
                <div className="flex border-b border-dashed border-gray-200 pb-4 text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                  <div className="flex-1">Description</div>
                  <div className="w-20 text-center">Qty</div>
                  <div className="w-32 text-right">Unit Price</div>
                  <div className="w-32 text-right">Total</div>
                </div>

                <div className="flex flex-col gap-5 border-b border-dashed border-gray-200 py-6">
                  {items.map((item, i) => (
                    <div key={item.id} className="flex text-sm text-gray-700">
                      <div className="flex-1 font-medium text-gray-900">
                        {item.name || `Item ${i + 1}`}
                      </div>
                      <div className="w-20 text-center">{item.qty}</div>
                      <div className="w-32 text-right">
                        {currency} {item.price.toLocaleString()}
                      </div>
                      <div className="w-32 text-right font-medium text-gray-900">
                        {currency} {(item.qty * item.price).toLocaleString()}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Totals */}
              <div className="flex flex-col items-end pt-8">
                <div className="flex w-full max-w-[280px] flex-col gap-4">
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Subtotal</span>
                    <span>
                      {currency} {total.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Tax (0%)</span>
                    <span>{currency} 0</span>
                  </div>
                  <div className="mt-2 flex justify-between border-t border-gray-900 pt-4 text-lg font-bold text-gray-900">
                    <span>Total Due</span>
                    <span>
                      {currency} {total.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Footer Notes */}
              {notes && (
                <div className="mt-auto pt-16 text-xs text-gray-500">
                  <span className="text-[10px] font-semibold tracking-wide text-gray-700 uppercase">
                    Notes
                  </span>
                  <p className="mt-2 leading-relaxed whitespace-pre-wrap">
                    {notes}
                  </p>
                </div>
              )}
            </div>
          </div>
        </MainContent>
      </PageMain>
    </>
  );
}
