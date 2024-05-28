import DatePicker from "react-date-picker";
import { categories } from "../data/categories";
import 'react-date-picker/dist/DatePicker.css'
import 'react-calendar/dist/Calendar.css'


export default function ExpenseForm() {
    return (
        <form className="space-y-5">
            <legend className="uppercase text-center text-2xl font-black border-b-4 border-blue-500 py-2">
                Nuevo Gasto
            </legend>

            <div className=" flex flex-col gap-2">
                <label
                    htmlFor="expenseName"
                    className="text-xl"
                >
                    Nombre Gasto:
                </label>
                <input
                    id="expenseName"
                    type="text"
                    placeholder="Añade el Nombre del Gasto"
                    className=" bg-slate-100 p-2"
                    name="expenseName"
                />
            </div>

            <div className=" flex flex-col gap-2">
                <label
                    htmlFor="amount"
                    className="text-xl"
                >
                    Cantidad:
                </label>
                <input
                    id="amount"
                    type="number"
                    placeholder="Añade la cantidad del Gasto"
                    className=" bg-slate-100 p-2"
                    name="amount"
                />
            </div>

            <div className=" flex flex-col gap-2">
                <label
                    htmlFor="category"
                    className="text-xl"
                >
                    Categoría:
                </label>
                <select
                    id="category"
                    className=" bg-slate-100 p-2"
                    name="category"
                >
                    <option value="">-- Seleccione --</option>
                    {categories.map(category => (
                        <option
                            key={category.id}
                            value={category.id}
                        >
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className=" flex flex-col gap-2">
                <label
                    htmlFor="amount"
                    className="text-xl"
                >
                    Fecha Gasto:
                </label>
                <DatePicker
                    className=" bg-slate-50 p-2 border-0"
                />
            </div>



            <input
                type="submit"
                className=" bg-blue-600 cursor-pointer w-full p-2 text-white uppercase font-bold rounded-lg"
                value={"Registrar Gasto"}
            />
        </form>
    )
}
