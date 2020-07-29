"use strict";

var gbz80Instructions = [
    {
      "name" : "adc a, r8",
      "description" : "a = a + r8 + carry",
      "optionalA" : true,
      "cycles" : 1,
      "bytes" : 1,
      "flags" : {
        "z" : "Set if result is 0",
        "n" : "0",
        "h" : "Set if overflow from bit 3",
        "c" : "Set if overflow from bit 7"
      }
    },
    {
      "name" : "adc a, [hl]",
      "description" : "a = a + [hl] + carry",
      "optionalA" : true,
      "cycles" : 2,
      "bytes" : 1,
      "flags" : {
        "z" : "Set if result is 0",
        "n" : "0",
        "h" : "Set if overflow from bit 3",
        "c" : "Set if overflow from bit 7"
      }
    },
    {
      "name" : "adc a, n8",
      "description" : "a = a + n8 + carry",
      "optionalA" : true,
      "cycles" : 2,
      "bytes" : 2,
      "flags" : {
        "z" : "Set if result is 0",
        "n" : "0",
        "h" : "Set if overflow from bit 3",
        "c" : "Set if overflow from bit 7"
      }
    },
    {
      "name" : "add a, r8",
      "description" : "a = a + r8",
      "optionalA" : true,
      "cycles" : 1,
      "bytes" : 1,
      "flags" : {
        "z" : "Set if result is 0",
        "n" : "0",
        "h" : "Set if overflow from bit 3",
        "c" : "Set if overflow from bit 7"
      }
    },
    {
      "name" : "add a, [hl]",
      "description" : "a = a + [hl]",
      "optionalA" : true,
      "cycles" : 2,
      "bytes" : 1,
      "flags" : {
        "z" : "Set if result is 0",
        "n" : "0",
        "h" : "Set if overflow from bit 3",
        "c" : "Set if overflow from bit 7"
      }
    },
    {
      "name" : "add a, n8",
      "description" : "a = a + n8",
      "optionalA" : true,
      "cycles" : 2,
      "bytes" : 2,
      "flags" : {
        "z" : "Set if result is 0",
        "n" : "0",
        "h" : "Set if overflow from bit 3",
        "c" : "Set if overflow from bit 7"
      }
    },
    {
      "name" : "add hl, r16",
      "description" : "hl = hl + r16",
      "cycles" : 2,
      "bytes" : 1,
      "flags" : {
        "n" : "0",
        "h" : "Set if overflow from bit 11",
        "c" : "Set if overflow from bit 15"
      }
    },
    {
      "name" : "add hl, sp",
      "description" : "hl = hl + sp",
      "cycles" : 2,
      "bytes" : 1,
      "flags" : {
        "n" : "0",
        "h" : "Set if overflow from bit 11",
        "c" : "Set if overflow from bit 15"
      }
    },
    {
      "name" : "add sp, e8",
      "description" : "sp = sp + e8",
      "cycles" : 4,
      "bytes" : 2,
      "flags" : {
        "z" : "0",
        "n" : "0",
        "h" : "Set if overflow from bit 3",
        "c" : "Set if overflow from bit 7"
      }
    },
    {
      "name" : "and a, r8",
      "description" : "a = a & r8",
      "optionalA" : true,
      "cycles" : 1,
      "bytes" : 1,
      "flags" : {
        "z" : "Set if result is 0",
        "n" : "0",
        "h" : "1",
        "c" : "0"
      }
    },
    {
      "name" : "and a, [hl]",
      "description" : "a = a & [hl]",
      "optionalA" : true,
      "cycles" : 2,
      "bytes" : 1,
      "flags" : {
        "z" : "Set if result is 0",
        "n" : "0",
        "h" : "1",
        "c" : "0"
      }
    },
    {
      "name" : "and a, n8",
      "description" : "a = a & n8",
      "optionalA" : true,
      "cycles" : 2,
      "bytes" : 2,
      "flags" : {
        "z" : "Set if result is 0",
        "n" : "0",
        "h" : "1",
        "c" : "0"
      }
    },
    {
      "name" : "bit u3, r8",
      "description" : "Sets Z if bit u3 in r8 is 0",
      "cycles" : 2,
      "bytes" : 2,
      "flags" : {
        "z" : "Set if selected bit is 0",
        "n" : "0",
        "h" : "1"
      }
    },
    {
      "name" : "bit u3, [hl]",
      "description" : "Sets Z if bit u3 in [hl] is 0",
      "cycles" : 3,
      "bytes" : 2,
      "flags" : {
        "z" : "Set if selected bit is 0",
        "n" : "0",
        "h" : "1"
      }
    },
    {
      "name" : "call n16",
      "description" : "Calls address n16",
      "cycles" : 6,
      "bytes" : 3,
      "flags" : {}
    },
    {
      "name" : "call cc, n16",
      "description" : "Calls address n16 if condition cc is met",
      "cycles" : "6/3",
      "bytes" : 3,
      "flags" : {}
    },
    {
      "name" : "ccf",
      "description" : "Complements the carry flag",
      "cycles" : 1,
      "bytes" : 1,
      "flags" : {
        "n" : "0",
        "h" : "0",
        "c" : "Complemented"
      }
    },
    {
      "name" : "cp a, r8",
      "description" : "flags = a - r8",
      "optionalA" : true,
      "cycles" : 1,
      "bytes" : 1,
      "flags" : {
        "z" : "Set if result is 0 (a == r8)",
        "n" : "1",
        "h" : "Set if no borrow from bit 4",
        "c" : "Set if no borrow (a < r8)"
      }
    },
    {
      "name" : "cp a, [hl]",
      "description" : "flags = a - [hl]",
      "optionalA" : true,
      "cycles" : 2,
      "bytes" : 1,
      "flags" : {
        "z" : "Set if result is 0 (a == [hl])",
        "n" : "1",
        "h" : "Set if no borrow from bit 4",
        "c" : "Set if no borrow (a < [hl])"
      }
    },
    {
      "name" : "cp a, n8",
      "description" : "flags = a - n8",
      "optionalA" : true,
      "cycles" : 2,
      "bytes" : 2,
      "flags" : {
        "z" : "Set if result is 0 (a == n8)",
        "n" : "1",
        "h" : "Set if no borrow from bit 4",
        "c" : "Set if no borrow (a < n8)"
      }
    },
    {
      "name" : "cpl",
      "description" : "a = ~a",
      "cycles" : 1,
      "bytes" : 1,
      "flags" : {
        "n" : "1",
        "h" : "1"
      }
    },
    {
      "name" : "daa",
      "description" : "Decimal adjusts a to correct BCD value after arithmetic",
      "cycles" : 1,
      "bytes" : 1,
      "flags" : {
        "z" : "Set if result is 0",
        "h" : "0",
        "c" : "Set or reset based on operation"
      }
    },
    {
      "name" : "dec r8",
      "description" : "r8 -= 1",
      "cycles" : 1,
      "bytes" : 1,
      "flags" : {
        "z" : "Set if result is 0",
        "n" : "1",
        "h" : "Set if no borrow from bit 4"
      }
    },
    {
      "name" : "dec [hl]",
      "description" : "[hl] -= 1",
      "cycles" : 3,
      "bytes" : 1,
      "flags" : {
        "z" : "Set if result is 0",
        "n" : "1",
        "h" : "Set if no borrow from bit 4"
      }
    },
    {
      "name" : "dec r16",
      "description" : "r16 -= 1",
      "cycles" : 2,
      "bytes" : 1,
      "flags" : {}
    },
    {
      "name" : "dec sp",
      "description" : "sp -= 1",
      "cycles" : 2,
      "bytes" : 1,
      "flags" : {}
    },
    {
      "name" : "di",
      "description" : "Disables interrupts",
      "cycles" : 1,
      "bytes" : 1,
      "flags" : {}
    },
    {
      "name" : "ei",
      "description" : "Enables interrupts",
      "cycles" : 1,
      "bytes" : 1,
      "flags" : {}
    },
    {
      "name" : "halt",
      "description" : "Puts the CPU into low power mode",
      "cycles" : "-",
      "bytes" : 1,
      "flags" : {}
    },
    {
      "name" : "inc r8",
      "description" : "r8 += 1",
      "cycles" : 1,
      "bytes" : 1,
      "flags" : {
        "z" : "Set if result is 0",
        "n" : "0",
        "h" : "Set if overflow from bit 3"
      }
    },
    {
      "name" : "inc [hl]",
      "description" : "[hl] += 1",
      "cycles" : 3,
      "bytes" : 1,
      "flags" : {
        "z" : "Set if result is 0",
        "n" : "0",
        "h" : "Set if overflow from bit 3"
      }
    },
    {
      "name" : "inc r16",
      "description" : "r16 += 1",
      "cycles" : 2,
      "bytes" : 1,
      "flags" : {}
    },
    {
      "name" : "inc sp",
      "description" : "sp += 1",
      "cycles" : 2,
      "bytes" : 1,
      "flags" : {}
    },
    {
      "name" : "jp n16",
      "description" : "Jumps to address n16",
      "cycles" : 4,
      "bytes" : 3,
      "flags" : {}
    },
    {
      "name" : "jp cc, n16",
      "description" : "Jumps to address n16 if condition cc is met",
      "cycles" : "4/3",
      "bytes" : 3,
      "flags" : {}
    },
    {
      "name" : "jp hl",
      "description" : "Jumps to address in hl",
      "cycles" : 1,
      "bytes" : 1,
      "flags" : {}
    },
    {
      "name" : "jr e8",
      "description" : "Relative jumps by adding e8 to pc",
      "cycles" : 3,
      "bytes" : 2,
      "flags" : {}
    },
    {
      "name" : "jr cc, e8",
      "description" : "Relative jumps by adding e8 to pc if condition cc is met",
      "cycles" : "3/2",
      "bytes" : 2,
      "flags" : {}
    },
    {
      "name" : "ld r8, r8",
      "description" : "Copies the value from the right register into the left",
      "cycles" : 1,
      "bytes" : 1,
      "flags" : {}
    },
    {
      "name" : "ld r8, n8",
      "description" : "r8 = n8",
      "cycles" : 2,
      "bytes" : 2,
      "flags" : {}
    },
    {
      "name" : "ld r16, n16",
      "description" : "r16 = n16",
      "cycles" : 3,
      "bytes" : 3,
      "flags" : {}
    },
    {
      "name" : "ld [hl], r8",
      "description" : "[hl] = r8",
      "cycles" : 2,
      "bytes" : 1,
      "flags" : {}
    },
    {
      "name" : "ld [hl], n8",
      "description" : "[hl] = n8",
      "cycles" : 3,
      "bytes" : 2,
      "flags" : {}
    },
    {
      "name" : "ld r8, [hl]",
      "description" : "r8 = [hl]",
      "cycles" : 2,
      "bytes" : 1,
      "flags" : {}
    },
    {
      "name" : "ld [r16], a",
      "description" : "[r16] = a",
      "cycles" : 2,
      "bytes" : 1,
      "flags" : {}
    },
    {
      "name" : "ld [n16], a",
      "description" : "[n16] = a",
      "cycles" : 4,
      "bytes" : 3,
      "flags" : {}
    },
    {
      "name" : "ldh [$ff00+n8], a",
      "description" : "[$ff00+n8] = a",
      "cycles" : 3,
      "bytes" : 2,
      "flags" : {}
    },
    {
      "name" : "ld [$ff00+c], a",
      "description" : "[$ff00+c] = a",
      "cycles" : 2,
      "bytes" : 1,
      "flags" : {}
    },
    {
      "name" : "ld a, [r16]",
      "description" : "a = [r16]",
      "cycles" : 2,
      "bytes" : 1,
      "flags" : {}
    },
    {
      "name" : "ld a, [n16]",
      "description" : "a = [n16]",
      "cycles" : 4,
      "bytes" : 3,
      "flags" : {}
    },
    {
      "name" : "ldh a, [$ff00+n8]",
      "description" : "a = [$ff00+n8]",
      "cycles" : 3,
      "bytes" : 2,
      "flags" : {}
    },
    {
      "name" : "ld a, [$ff00+c]",
      "description" : "a = [$ff00+c]",
      "cycles" : 2,
      "bytes" : 1,
      "flags" : {}
    },
    {
      "name" : "ld [hl+], a",
      "description" : "[hl] = a, hl += 1",
      "aliasHLI" : true,
      "cycles" : 2,
      "bytes" : 1,
      "flags" : {}
    },
    {
      "name" : "ld [hl-], a",
      "description" : "[hl] = a, hl -= 1",
      "aliasHLD" : true,
      "cycles" : 2,
      "bytes" : 1,
      "flags" : {}
    },
    {
      "name" : "ld a, [hl+]",
      "description" : "a = [hl], hl += 1",
      "aliasHLI" : true,
      "cycles" : 2,
      "bytes" : 1,
      "flags" : {}
    },
    {
      "name" : "ld a, [hl-]",
      "description" : "a = [hl], hl -= 1",
      "aliasHLD" : true,
      "cycles" : 2,
      "bytes" : 1,
      "flags" : {}
    },
    {
      "name" : "ld sp, n16",
      "description" : "sp = n16",
      "cycles" : 3,
      "bytes" : 3,
      "flags" : {}
    },
    {
      "name" : "ld [n16], sp",
      "description" : "[n16, n16 + 1] = sp",
      "cycles" : 5,
      "bytes" : 3,
      "flags" : {}
    },
    {
      "name" : "ld hl, sp+e8",
      "description" : "hl = sp + e8",
      "cycles" : 3,
      "bytes" : 2,
      "flags" : {
        "z" : "0",
        "n" : "0",
        "h" : "Set if overflow from bit 3",
        "c" : "Set if overflow from bit 7"
      }
    },
    {
      "name" : "ld sp, hl",
      "description" : "sp = hl",
      "cycles" : 2,
      "bytes" : 1,
      "flags" : {}
    },
    {
      "name" : "nop",
      "description" : "No operation",
      "cycles" : 1,
      "bytes" : 1,
      "flags" : {}
    },
    {
      "name" : "or a, r8",
      "description" : "a = a | r8",
      "optionalA" : true,
      "cycles" : 1,
      "bytes" : 1,
      "flags" : {
        "z" : "Set if result is 0",
        "n" : "0",
        "h" : "0",
        "c" : "0"
      }
    },
    {
      "name" : "or a, [hl]",
      "description" : "a = a | [hl]",
      "optionalA" : true,
      "cycles" : 2,
      "bytes" : 1,
      "flags" : {
        "z" : "Set if result is 0",
        "n" : "0",
        "h" : "0",
        "c" : "0"
      }
    },
    {
      "name" : "or a, n8",
      "description" : "a = a | n8",
      "optionalA" : true,
      "cycles" : 2,
      "bytes" : 2,
      "flags" : {
        "z" : "Set if result is 0",
        "n" : "0",
        "h" : "0",
        "c" : "0"
      }
    },
    {
      "name" : "pop af",
      "description" : "Pops the stack into af",
      "cycles" : 3,
      "bytes" : 1,
      "flags" : {}
    },
    {
      "name" : "pop r16",
      "description" : "Pops the stack into r16",
      "cycles" : 3,
      "bytes" : 1,
      "flags" : {}
    },
    {
      "name" : "push af",
      "description" : "Pushes af onto the stack",
      "cycles" : 4,
      "bytes" : 1,
      "flags" : {}
    },
    {
      "name" : "push r16",
      "description" : "Pushes r16 onto the stack",
      "cycles" : 4,
      "bytes" : 1,
      "flags" : {}
    },
    {
      "name" : "res u3, r8",
      "description" : "Sets the bit u3 in r8 to 0",
      "cycles" : 2,
      "bytes" : 2,
      "flags" : {}
    },
    {
      "name" : "res u3, [hl]",
      "description" : "Sets the bit u3 in [hl] to 0",
      "cycles" : 4,
      "bytes" : 2,
      "flags" : {}
    },
    {
      "name" : "ret",
      "description" : "Returns from the current subroutine",
      "cycles" : 4,
      "bytes" : 1,
      "flags" : {}
    },
    {
      "name" : "ret cc",
      "description" : "Returns from the current subroutine if condition cc is met",
      "cycles" : "5/2",
      "bytes" : 1,
      "flags" : {}
    },
    {
      "name" : "reti",
      "description" : "Returns from the current subroutine and enables interrupts",
      "cycles" : 4,
      "bytes" : 1,
      "flags" : {}
    },
    {
      "name" : "rl r8",
      "description" : "Rotates r8 left, sets bit 0 to carry, sets carry to old bit 7",
      "cycles" : 2,
      "bytes" : 2,
      "flags" : {
        "z" : "Set if result is 0",
        "n" : "0",
        "h" : "0",
        "c" : "Set to old bit 7"
      }
    },
    {
      "name" : "rl [hl]",
      "description" : "Rotates [hl] left, sets bit 0 to carry, sets carry to old bit 7",
      "cycles" : 4,
      "bytes" : 2,
      "flags" : {
        "z" : "Set if result is 0",
        "n" : "0",
        "h" : "0",
        "c" : "Set to old bit 7"
      }
    },
    {
      "name" : "rla",
      "description" : "Rotates a left, sets bit 0 to carry, sets carry to old bit 7",
      "cycles" : 1,
      "bytes" : 1,
      "flags" : {
        "z" : "0",
        "n" : "0",
        "h" : "0",
        "c" : "Set to old bit 7"
      }
    },
    {
      "name" : "rlc r8",
      "description" : "Rotates r8 left, sets bit 0 and carry to old bit 7",
      "cycles" : 2,
      "bytes" : 2,
      "flags" : {
        "z" : "Set if result is 0",
        "n" : "0",
        "h" : "0",
        "c" : "Set to old bit 7"
      }
    },
    {
      "name" : "rlc [hl]",
      "description" : "Rotates [hl] left, sets bit 0 and carry to old bit 7",
      "cycles" : 4,
      "bytes" : 2,
      "flags" : {
        "z" : "Set if result is 0",
        "n" : "0",
        "h" : "0",
        "c" : "Set to old bit 7"
      }
    },
    {
      "name" : "rlca",
      "description" : "Rotates a left, sets bit 0 and carry to old bit 7",
      "cycles" : 1,
      "bytes" : 1,
      "flags" : {
        "z" : "0",
        "n" : "0",
        "h" : "0",
        "c" : "Set to old bit 7"
      }
    },
    {
      "name" : "rr r8",
      "description" : "Rotates r8 right, sets bit 7 to carry, sets carry to old bit 0",
      "cycles" : 2,
      "bytes" : 2,
      "flags" : {
        "z" : "Set if result is 0",
        "n" : "0",
        "h" : "0",
        "c" : "Set to old bit 0"
      }
    },
    {
      "name" : "rr [hl]",
      "description" : "Rotates [hl] right, sets bit 7 to carry, sets carry to old bit 0",
      "cycles" : 4,
      "bytes" : 2,
      "flags" : {
        "z" : "Set if result is 0",
        "n" : "0",
        "h" : "0",
        "c" : "Set to old bit 0"
      }
    },
    {
      "name" : "rra",
      "description" : "Rotates a right, sets bit 7 to carry, sets carry to old bit 0",
      "cycles" : 1,
      "bytes" : 1,
      "flags" : {
        "z" : "0",
        "n" : "0",
        "h" : "0",
        "c" : "Set to old bit 0"
      }
    },
    {
      "name" : "rrc r8",
      "description" : "Rotates r8 right, sets bit 7 and carry to old bit 0",
      "cycles" : 2,
      "bytes" : 2,
      "flags" : {
        "z" : "Set if result is 0",
        "n" : "0",
        "h" : "0",
        "c" : "Set to old bit 0"
      }
    },
    {
      "name" : "rrc [hl]",
      "description" : "Rotates [hl] right, sets bit 7 and carry to old bit 0",
      "cycles" : 4,
      "bytes" : 2,
      "flags" : {
        "z" : "Set if result is 0",
        "n" : "0",
        "h" : "0",
        "c" : "Set to old bit 0"
      }
    },
    {
      "name" : "rrca",
      "description" : "Rotates a right, sets bit 7 and carry to old bit 0",
      "cycles" : 1,
      "bytes" : 1,
      "flags" : {
        "z" : "0",
        "n" : "0",
        "h" : "0",
        "c" : "Set to old bit 0"
      }
    },
    {
      "name" : "rst vec",
      "description" : "Calls given reset vector",
      "cycles" : 4,
      "bytes" : 1,
      "flags" : {}
    },
    {
      "name" : "sbc a, r8",
      "description" : "a = a - r8 - c",
      "optionalA" : true,
      "cycles" : 1,
      "bytes" : 1,
      "flags" : {
        "z" : "Set if result is 0",
        "n" : "1",
        "h" : "Set if no borrow from bit 4",
        "c" : "Set if no borrow"
      }
    },
    {
      "name" : "sbc a, [hl]",
      "description" : "a = a - [hl] - c",
      "optionalA" : true,
      "cycles" : 2,
      "bytes" : 1,
      "flags" : {
        "z" : "Set if result is 0",
        "n" : "1",
        "h" : "Set if no borrow from bit 4",
        "c" : "Set if no borrow"
      }
    },
    {
      "name" : "sbc a, n8",
      "description" : "a = a - n8 - c",
      "optionalA" : true,
      "cycles" : 2,
      "bytes" : 2,
      "flags" : {
        "z" : "Set if result is 0",
        "n" : "1",
        "h" : "Set if no borrow from bit 4",
        "c" : "Set if no borrow"
      }
    },
    {
      "name" : "scf",
      "description" : "Sets the carry flag to 1",
      "cycles" : 1,
      "bytes" : 1,
      "flags" : {
        "n" : "0",
        "h" : "0",
        "c" : "1"
      }
    },
    {
      "name" : "set u3, r8",
      "description" : "Sets the bit u3 in r8 to 1",
      "cycles" : 2,
      "bytes" : 2,
      "flags" : {}
    },
    {
      "name" : "set u3, [hl]",
      "description" : "Sets the bit u3 in [hl] to 1",
      "cycles" : 4,
      "bytes" : 2,
      "flags" : {}
    },
    {
      "name" : "sla r8",
      "description" : "Shifts r8 left, sets carry to old bit 7",
      "cycles" : 2,
      "bytes" : 2,
      "flags" : {
        "z" : "Set if result is 0",
        "n" : "0",
        "h" : "0",
        "c" : "Set to old bit 7"
      }
    },
    {
      "name" : "sla [hl]",
      "description" : "Shifts [hl] left, sets carry to old bit 7",
      "cycles" : 4,
      "bytes" : 2,
      "flags" : {
        "z" : "Set if result is 0",
        "n" : "0",
        "h" : "0",
        "c" : "Set to old bit 7"
      }
    },
    {
      "name" : "sra r8",
      "description" : "Shifts r8 right keeping bit 7 unchanged, sets carry to old bit 0",
      "cycles" : 2,
      "bytes" : 2,
      "flags" : {
        "z" : "Set if result is 0",
        "n" : "0",
        "h" : "0",
        "c" : "Set to old bit 0"
      }
    },
    {
      "name" : "sra [hl]",
      "description" : "Shifts [hl] right keeping bit 7 unchanged, sets carry to old bit 0",
      "cycles" : 4,
      "bytes" : 2,
      "flags" : {
        "z" : "Set if result is 0",
        "n" : "0",
        "h" : "0",
        "c" : "Set to old bit 0"
      }
    },
    {
      "name" : "srl r8",
      "description" : "Shifts r8 right, sets carry to old bit 0",
      "cycles" : 2,
      "bytes" : 2,
      "flags" : {
        "z" : "Set if result is 0",
        "n" : "0",
        "h" : "0",
        "c" : "Set to old bit 0"
      }
    },
    {
      "name" : "srl [hl]",
      "description" : "Shifts [hl] right, sets carry to old bit 0",
      "cycles" : 4,
      "bytes" : 2,
      "flags" : {
        "z" : "Set if result is 0",
        "n" : "0",
        "h" : "0",
        "c" : "Set to old bit 0"
      }
    },
    {
      "name" : "stop",
      "description" : "Puts the CPU into very low power mode",
      "cycles" : "-",
      "bytes" : "2",
      "flags" : {}
    },
    {
      "name" : "sub a, r8",
      "description" : "a = a - r8",
      "optionalA" : true,
      "cycles" : 1,
      "bytes" : 1,
      "flags" : {
        "z" : "Set if result is 0 (a == r8)",
        "n" : "1",
        "h" : "Set if no borrow from bit 4",
        "c" : "Set if no borrow (a < r8)"
      }
    },
    {
      "name" : "sub a, [hl]",
      "description" : "a = a - [hl]",
      "optionalA" : true,
      "cycles" : 2,
      "bytes" : 1,
      "flags" : {
        "z" : "Set if result is 0 (a == [hl])",
        "n" : "1",
        "h" : "Set if no borrow from bit 4",
        "c" : "Set if no borrow (a < [hl])"
      }
    },
    {
      "name" : "sub a, n8",
      "description" : "a = a - n8",
      "optionalA" : true,
      "cycles" : 2,
      "bytes" : 2,
      "flags" : {
        "z" : "Set if result is 0 (a == n8)",
        "n" : "1",
        "h" : "Set if no borrow from bit 4",
        "c" : "Set if no borrow (a < n8)"
      }
    },
    {
      "name" : "swap r8",
      "description" : "Swaps the upper and lower 4 bits in r8",
      "cycles" : 2,
      "bytes" : 2,
      "flags" : {
        "z" : "Set if result is 0",
        "n" : "0",
        "h" : "0",
        "c" : "0"
      }
    },
    {
      "name" : "swap [hl]",
      "description" : "Swaps the upper and lower 4 bits in [hl]",
      "cycles" : 4,
      "bytes" : 2,
      "flags" : {
        "z" : "Set if result is 0",
        "n" : "0",
        "h" : "0",
        "c" : "0"
      }
    },
    {
      "name" : "xor a, r8",
      "description" : "a = a ^ r8",
      "optionalA" : true,
      "cycles" : 1,
      "bytes" : 1,
      "flags" : {
        "z" : "Set if result is 0",
        "n" : "0",
        "h" : "0",
        "c" : "0"
      }
    },
    {
      "name" : "xor a, [hl]",
      "description" : "a = a ^ [hl]",
      "optionalA" : true,
      "cycles" : 2,
      "bytes" : 1,
      "flags" : {
        "z" : "Set if result is 0",
        "n" : "0",
        "h" : "0",
        "c" : "0"
      }
    },
    {
      "name" : "xor a, n8",
      "description" : "a = a ^ n8",
      "optionalA" : true,
      "cycles" : 2,
      "bytes" : 2,
      "flags" : {
        "z" : "Set if result is 0",
        "n" : "0",
        "h" : "0",
        "c" : "0"
      }
    }
  ]

var gbz80CompleterInstructions = []
gbz80Instructions.forEach(function(instr) {
    var doc = "<table><tr><td colspan=2>" + instr["description"];
    doc += "<tr><td>cycles:<td>" + instr["cycles"];
    doc += "<tr><td>size:<td>" + instr["bytes"];
    doc += "<tr><td>Flag Z:<td>" + instr["flags"]["z"];
    doc += "<tr><td>Flag N:<td>" + instr["flags"]["n"];
    doc += "<tr><td>Flag H:<td>" + instr["flags"]["H"];
    doc += "<tr><td>Flag C:<td>" + instr["flags"]["C"];
    var i = {
        caption: instr["name"], value: instr["name"], meta: "",
        docHTML: doc,
    };
    i.completer = { insertMatch: function(editor, data) {
        //editor.completer.insertMatch({value: data.value.split(" ")[0]});
        //editor.selection.selectTo(editor.selection.cursor.row, editor.selection.cursor.column - offset);
    }}
    gbz80CompleterInstructions.push(i);
});

var gbz80Completer = {
    getCompletions: function(editor, session, pos, prefix, callback) {
        var line = session.getLine(pos.row);
        // Check if we are possibly typing an instruction.
        var before = line.substr(0, pos.column - 1).trim();
        console.log(before);
        if (before.trim() == "" || before.trim().endsWith(":"))
        {
            callback(null, gbz80CompleterInstructions.filter(function(c) {
                return c.value.startsWith(prefix.toLowerCase());
            }));
        }
    }
}
