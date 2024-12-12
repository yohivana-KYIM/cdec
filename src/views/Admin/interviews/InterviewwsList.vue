<template>
  <div class="min-h-screen text-gray-900 bg-white">
    <div class="container px-4 py-8 mx-auto">
      <header class="mb-10">
        <h1 class="text-4xl font-bold text-[#324C9C] mb-4">
          Interview Management
        </h1>
        <div class="flex items-center justify-between">
          <div class="flex space-x-4">
            <button
              class="px-4 py-2 bg-[#324C9C] text-white rounded-lg hover:bg-opacity-90 transition-colors"
            >
              New Interview
            </button>
            <button
              class="px-4 py-2 border border-[#324C9C] text-[#324C9C] rounded-lg hover:bg-[#324C9C] hover:text-white transition-colors"
            >
              Filter
            </button>
          </div>
          <div class="relative">
            <input
              type="text"
              placeholder="Search interviews..."
              class="w-full px-4 py-2 border border-gray-300 rounded-lg pl-10 focus:outline-none focus:ring-2 focus:ring-[#F0DF74]"
            />
            <svg
              class="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
        </div>
      </header>

      <div class="overflow-hidden bg-white rounded-lg shadow-lg">
        <table class="w-full">
          <thead class="bg-[#324C9C] text-white">
            <tr>
              <th class="px-6 py-4 text-left">Candidate</th>
              <th class="px-6 py-4 text-left">Position</th>
              <th class="px-6 py-4 text-left">Date</th>
              <th class="px-6 py-4 text-left">Time</th>
              <th class="px-6 py-4 text-left">Status</th>
              <th class="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="interview in interviews"
              :key="interview.id"
              class="transition-colors border-b hover:bg-gray-50"
            >
              <td class="px-6 py-4">
                <div class="flex items-center">
                  <div
                    class="w-10 h-10 bg-[#F0DF74] rounded-full mr-3 flex items-center justify-center"
                  >
                    {{ interview.candidate.charAt(0) }}
                  </div>
                  <span class="font-medium">{{ interview.candidate }}</span>
                </div>
              </td>
              <td class="px-6 py-4">{{ interview.position }}</td>
              <td class="px-6 py-4">{{ interview.date }}</td>
              <td class="px-6 py-4">{{ interview.time }}</td>
              <td class="px-6 py-4">
                <span
                  class="px-3 py-1 text-sm font-medium rounded-full"
                  :class="{
                    'bg-green-100 text-green-800':
                      interview.status === 'Confirmed',
                    'bg-yellow-100 text-yellow-800':
                      interview.status === 'Pending',
                    'bg-blue-100 text-blue-800':
                      interview.status === 'Scheduled',
                  }"
                >
                  {{ interview.status }}
                </span>
              </td>
              <td class="px-6 py-4 text-right">
                <div class="flex justify-end space-x-2">
                  <button
                    class="text-green-600 transition-colors hover:text-green-800"
                    title="View Details"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                      ></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  </button>
                  <button
                    class="text-blue-600 transition-colors hover:text-blue-800"
                    title="Edit Interview"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path d="M12 20h9"></path>
                      <path
                        d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
                      ></path>
                    </svg>
                  </button>
                  <button
                    class="text-red-600 transition-colors hover:text-red-800"
                    title="Cancel Interview"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="15" y1="9" x2="9" y2="15"></line>
                      <line x1="9" y1="9" x2="15" y2="15"></line>
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      interviews: [
        {
          id: 1,
          candidate: "Marie Dupont",
          position: "Senior Software Engineer",
          date: "15 Dec 2024",
          time: "14:30",
          status: "Confirmed",
        },
        {
          id: 2,
          candidate: "Pierre Martin",
          position: "Product Manager",
          date: "18 Dec 2024",
          time: "10:00",
          status: "Pending",
        },
        {
          id: 3,
          candidate: "Sophie Laurent",
          position: "UX Designer",
          date: "20 Dec 2024",
          time: "11:15",
          status: "Scheduled",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Additional custom styles can be added here if needed */
</style>
