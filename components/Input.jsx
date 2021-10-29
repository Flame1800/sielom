
export default function Input({ label, placeholder }) {
    return (
            <div className="mt-1 mb-4 relative">
                <label htmlFor="default" className="mt-2 block text-sm font-medium text-gray-700">{label}</label>
                <input
                    id="default"
                    type="text"
                    name="default"
                    placeholder={placeholder}
                    className="px-4 py-2 rounded-lg border w-full border-gray-300 focus:outline-none"
                />
            </div>
    )
}
