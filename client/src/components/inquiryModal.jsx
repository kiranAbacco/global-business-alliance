export default function InquiryModal({ isOpen, onClose, companyName }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            {/* MODAL BOX */}
            <div className="bg-white rounded-2xl w-full max-w-md p-6 relative">
                {/* CLOSE BUTTON */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-black"
                >
                    ✕
                </button>

                <h2 className="text-2xl font-bold mb-2">
                    Request Business Inquiry
                </h2>
                <p className="text-sm text-gray-600 mb-6">
                    Send a business inquiry to <strong>{companyName}</strong>.
                </p>

                {/* FORM */}
                <form className="space-y-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full border rounded-lg px-4 py-3"
                        required
                    />

                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full border rounded-lg px-4 py-3"
                        required
                    />

                    <input
                        type="text"
                        placeholder="Your Company"
                        className="w-full border rounded-lg px-4 py-3"
                    />

                    <textarea
                        rows="4"
                        placeholder="Your Message"
                        className="w-full border rounded-lg px-4 py-3"
                        required
                    ></textarea>

                    <button
                        type="submit"
                        className="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
                    >
                        Send Inquiry
                    </button>
                </form>
            </div>
        </div>
    );
}
